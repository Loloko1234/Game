import { useState } from "react";
import SearchBar from "../../Components/SearchBar";
import Filter from "../../Components/filter";

function Main({ setClickedLink, isDarkMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-custom-color2 text-white" : "bg-custom-color3"
      }`}
    >
      <SearchBar
        handleSearchTermChange={handleSearchTermChange}
        isDarkMode={isDarkMode}
      />
      <Filter
        textSearch={searchTerm}
        setClickedLink={setClickedLink}
        isDarkMode={isDarkMode}
      />{" "}
    </div>
  );
}

export default Main;
