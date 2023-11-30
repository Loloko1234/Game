import { useState } from "react";
import Nav from "./Components/nav";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/filter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Nav />
      <SearchBar handleSearchTermChange={handleSearchTermChange} />
      <Filter textSearch={searchTerm} />
    </>
  );
}

export default App;
