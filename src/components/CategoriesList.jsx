import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { filterCategory } from "../helpers/filterCategory";

function CategoriesList() {
  const {
    activationAutocomplete,
    setActivationAutocomplete,
    categoryList,
    searchInput,
    setSearchInput,
    setSearchButton,
    darkMode
  } = useContext(AppContext);

  const setAutocomplete = (categoryName) => {
    setSearchInput(categoryName.toString());
    setSearchButton(true);
    setActivationAutocomplete(false);
  };
  return (
    <>
      {activationAutocomplete && searchInput.length > 1 && (
        <ul className="categoryListContainer">
          {filterCategory(categoryList, searchInput, darkMode, setAutocomplete)}
        </ul>
      )}
    </>
  );
}

export default CategoriesList;
