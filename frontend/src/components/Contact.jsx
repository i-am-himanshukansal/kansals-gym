import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);



  const sendEmail = async(e)=>{
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/send/mail`,
        {
          name,email,message,
        },
        {
          withCredentials: true,
          headers : {"Content-Type": "application/json"}
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
        toast.error(error?.response?.data?.message || "Something went wrong");
        setLoading(false);
    }
  }
  return (
    <section className="contact" id="contact">
      <form onSubmit={sendEmail}>
        <h1>Contact Us</h1>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading ? <ClipLoader size={20} color="white" /> : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
