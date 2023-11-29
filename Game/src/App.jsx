import { useState } from "react";
import Nav from "./Components/nav";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/filter";

function App() {
  return (
    <>
      <Nav />
      <SearchBar />
      <Filter />
    </>
  );
}

export default App;
