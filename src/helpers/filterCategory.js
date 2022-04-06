import iconSearch from "../resources/icon-search-mod-noc.svg";
import iconSearch2 from "../resources/icon-search.svg";

export const filterCategory = (
  listCategory,
  searchValue,
  darkMode,
  setAutocomplete
) => {
  const newList = listCategory.filter((name) => {
    if (name.includes(searchValue.toLowerCase())) {
      return name;
    }
    return name;
  });
  return newList.map((category, i) => {
    return (
      <li
        key={i}
        className="category"
        onClick={() => {
          setAutocomplete(category);
        }}
      >
        <img
          src={`${darkMode ? iconSearch : iconSearch2}`}
          alt="Busqueda"
          className="searchIcon"
        />
        <p className="categoryName">{category}</p>
      </li>
    );
  });
};
