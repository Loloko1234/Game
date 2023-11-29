import React, { useState, useEffect } from "react";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [countries, setCountries] = useState([]);
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
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
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
  }, []);

  return (
    <div>
      <select
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
      <div>
        {countries.map((country, index) => (
          <option key={index} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </div>
    </div>
  );
};

export default Filter;
