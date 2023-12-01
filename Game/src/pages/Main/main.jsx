import { useState } from "react";
import SearchBar from "../../Components/SearchBar";
import Filter from "../../Components/filter";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <SearchBar handleSearchTermChange={handleSearchTermChange} />
      <Filter textSearch={searchTerm} />
    </>
  );
}

export default App;
