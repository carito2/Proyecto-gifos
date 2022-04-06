import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchButton, setSearchButton] = useState(false);
  const [gifList, setGifList] = useState([]);
  const [countGif, setCountGif] = useState(0);
  const [categoryList, setCategoryList] = useState([]);
  const [activationAutocomplete, setActivationAutocomplete] = useState(false);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        loading,
        setLoading,
        searchInput,
        setSearchInput,
        searchButton,
        setSearchButton,
        gifList,
        setGifList,
        countGif,
        setCountGif,
        categoryList,
        setCategoryList,
        activationAutocomplete,
        setActivationAutocomplete
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
