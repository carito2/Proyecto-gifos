import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CategoriesList from "../components/CategoriesList";
import iconSearch from "../resources/icon-search-mod-noc.svg";
import ilustration from "../resources/ilustra_header.svg";

function SearchBar() {
  const {
    searchInput,
    setSearchInput,
    setSearchButton,
    setActivationAutocomplete
  } = useContext(AppContext);

  return (
    <section className="searchBar">
      <h1>
        ¡Inspirate y busca los mejores{" "}
        <span className="spanSearchBar">GIFS!</span>
      </h1>
      <img
        src={ilustration}
        alt="Imagen de bienvenida"
        className="imageSearchBar"
      />
      <form
        className="searchContainer"
        onSubmit={(e) => {
          e.preventDefault();
          setSearchButton(true);
          setActivationAutocomplete(false);
        }}
      >
        <input
          type="text"
          placeholder="Busca gifs"
          className="searchInput"
          onChange={(e) => {
            setSearchInput(e.target.value);
            setActivationAutocomplete(true);
          }}
          value={searchInput}
        />
        <button
          className="searchButton"
          onClick={() => {
            setSearchButton(true);
            setActivationAutocomplete(false);
          }}
        >
          <img src={iconSearch} alt="Icono de buscar" className="searchIcon" />
        </button>
      </form>
      <CategoriesList />
    </section>
  );
}

export default SearchBar;
