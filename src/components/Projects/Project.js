import React from "react";

const Project = ({ heading, url, image, alt }) => {
  return (
    <section class="card">
      <h1>{heading}</h1>
      <a href={url}>
        <img src={image} alt={alt} className="projectImg" /> </a>
      <p>
        <a href={url}>
          {heading}
        </a>
      </p>
    </section>
  );
};

export default Project