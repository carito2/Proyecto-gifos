import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Gifs from "../components/Gifs";
import NoResults from "../components/NoResults";
import CategoryTag from "../components/CategoryTag";
import close from "../resources/cerrar.png";

function Results() {
  const {
    loading,
    gifList,
    searchInput,
    setSearchInput,
    searchButton
  } = useContext(AppContext);
  return (
    <section className="containerResults">
      <h2>Resultados de la búsqueda:</h2>
      {searchInput.length > 0 && searchButton && (
        <CategoryTag
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          imgSrc={close}
        />
      )}
      <article className="containerGifs">
        {loading === false ? (
          gifList.length > 0 ? (
            gifList.map((gif) => {
              return (
                <Gifs
                  key={gif.slug}
                  link={gif.url}
                  imgSrc={gif.images.fixed_height.url}
                  title={gif.title}
                />
              );
            })
          ) : (
            <NoResults />
          )
        ) : (
          <h2> Loading...</h2>
        )}
      </article>
    </section>
  );
}

export default Results;
