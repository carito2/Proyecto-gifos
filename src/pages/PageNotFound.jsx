import React from "react";
import { Link } from "react-router-dom";
import "../styles/stylesPageNotFound.css";
import notFound from "../resources/notFound.jpeg";

function PageNotFound() {
  return (
    <div className="containerPageNotFound">
      <h2>Vuelve a ingresar a la página principal</h2>
      <Link className="linkGoToHome" to="/">
        Vuelve a Home
      </Link>
      <img
        src={notFound}
        alt="Pagina no encontrada"
        className="imagePageNotFound"
      />
    </div>
  );
}

export default PageNotFound;
