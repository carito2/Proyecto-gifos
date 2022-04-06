import React from "react";

function CategoryTag({ searchInput, imgSrc, setSearchInput }) {
  return (
    <button className="categoryResult" onClick={() => setSearchInput("")}>
      <p>{`${searchInput[0].toUpperCase()}${searchInput.slice(1)}`}</p>
      <img src={imgSrc} alt="Elimina categoría" className="deleteCategory" />
    </button>
  );
}

export default CategoryTag;
