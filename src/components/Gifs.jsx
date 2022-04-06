import React from "react";

function Gifs({ imgSrc, title, link }) {
  return (
    <div className="gifs">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt={title} className="gif" />
      </a>
    </div>
  );
}

export default Gifs;
