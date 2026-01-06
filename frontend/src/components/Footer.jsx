import React from "react";
import details from "../../data/detailss.json";
import "./footer.css";

import { IoMdMail } from "react-icons/io";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>{details.name}</h2>
          <p>{details.role}</p>
          <IoLocationSharp/><span>{details.location}</span>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact</h3>

          <a href={`mailto:${details.email}`}>
            <IoMdMail className="footer-icon" />
            <span>{details.email}</span>
          </a>

          <a href={`tel:${details.phone}`}>
            <FaPhoneAlt className="footer-icon" />
            <span>{details.phone}</span>
          </a>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h3>Connect</h3>

          <a
            href={details.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="footer-icon" />
            <span>GitHub</span>
          </a>

          <a
            href={details.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn</span>
          </a>

          <a
            href={details.socials.portfolio}
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkSquareAlt className="footer-icon" />
            <span>Portfolio</span>
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        Designed & Developed by <b>{details.name}</b> © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
