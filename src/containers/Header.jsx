import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import logoDescktop from "../resources/logo-desktop.svg";
import logoDarkMode from "../resources/logo-modo-noct.svg";


function Header() {
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <header className="header">
      <div className="rectangleHeader"></div>
      <img
        src={darkMode ? logoDarkMode : logoDescktop}
        alt="Logo Giphy"
        className="logo"
      />
      <button className="modeButton" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "MODO LIGHT" : "MODO DARK"}
      </button>
    </header>
  );
}

export default Header;
