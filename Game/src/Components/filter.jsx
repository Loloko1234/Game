import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Filter = ({ textSearch, setClickedLink, isDarkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const initialFilterOptions = [
    "Filter by region",
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const filteredOptions = initialFilterOptions.filter(
    (option) => option !== "Filter by region"
  );
  useEffect(() => {
    setSelectedFilter("Filter by region");
    setSearchTerm(textSearch);

    const fetchData = async () => {
      try {
        let url;
        if (textSearch !== "") {
          url = `https://restcountries.com/v3.1/name/${textSearch}`;
        } else {
          url = "https://restcountries.com/v3.1/all";
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data = await response.json();
        setCountries(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [textSearch]);
  return (
    <div
      className={`${
        isDarkMode ? "bg-custom-color2 text-white" : "bg-custom-color3"
      }`}
    >
      <select
        className={`w-1/2 h-16 rounded-md text-xl px-6 shadow-lg ml-8 mt-8 appearance-none focus:outline-none lg:w-1/6 lg:ml-20 lg:mt-9 lg:mb-6 ${
          isDarkMode ? "bg-custom-color text-white" : "bg-white"
        }`}
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        <option value="Filter by region" disabled hidden>
          Filter by region
        </option>
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <Link
        to="/sub"
        className="mr-8 lg:mr-20 lg:ml-20 ml-8 flex flex-wrap gap-20 justify-center mt-9 rounded-md mb-16  "
      >
        {countries.map((country, index) => (
          <div
            onClick={() => setClickedLink(country.name.common)}
            key={index}
            className={`essa shadow-xl sm:w-[450px] sm:h-[30rem] tablet:w-[365px] tablet:h-[400px] w-[360px] h-[400px] rounded-lg ${
              isDarkMode ? "bg-custom-color text-white" : "bg-white"
            }`}
          >
            {" "}
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div className="px-8 py-6">
              <h1 className="font-bold text-2xl" value={country.name.common}>
                {country.name.common}
              </h1>
              <p className="mt-3">
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString("es-ES")}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="mt-1">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Filter;
