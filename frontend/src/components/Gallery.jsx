import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/pricing.jpg",
  ];

  return (
    <section className="gallery" id="gallery">
      <h1>BETTER BEAT BEST</h1>

      <div className="images">
        {gallery.slice(0, 3).map((img, id) => (
          <div key={id}>
            <img src={img} alt={`gallery-${id}`} />
          </div>
        ))}
      </div>

      <div className="images">
        {gallery.slice(3, 6).map((img, id) => (
          <div key={id}>
            <img src={img} alt={`gallery-${id}`} />
          </div>
        ))}
      </div>

      <div className="images">
        {gallery.slice(6, 9).map((img, id) => (
          <div key={id}>
            <img src={img} alt={`gallery-${id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
