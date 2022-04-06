import React from "react";
import noResults from "../resources/noResults.jpeg";

function NoResults() {
  return (
    <section className="containerNoResults ">
      <h1 className="titleContainerNoResults">
        No se encontraron gifs para esta categoría
      </h1>
      <h2>Prueba con otra 👌</h2>
      <img
        src={noResults}
        alt="No se encontraron resultados"
        className="imageNotResults"
      />
    </section>
  );
}

export default NoResults;
