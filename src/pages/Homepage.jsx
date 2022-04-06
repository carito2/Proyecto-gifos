import React from "react";
import Header from "../containers/Header";
import SearchBar from "../containers/SearchBar";
import Results from "../containers/Results";

function Homepage() {
  return (
    <>
      <div className="marginContainer">
        <Header />
        <SearchBar />
        <Results />
      </div>
    </>
  );
}

export default Homepage;
