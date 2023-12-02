import React, { useState, useEffect } from "react";

const SubFlag = ({ clickedLink }) => {
  const [countries, setCountries] = useState([]); // Declare countries state
  const [searchTerm, setSearchTerm] = useState(clickedLink);

  console.log(clickedLink);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          // Add this check
          let url = `https://restcountries.com/v3.1/name/${searchTerm}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const data = await response.json();
          setCountries(data); // Update countries state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {countries.map((country, index) => {
        const firstLanguageKey = Object.keys(country.name.nativeName)[0];
        const firstCurrencyKey = Object.keys(country.currencies)[0];
        return (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-xl rounded-lg w-11/12 h-5/6 mx-auto my-8 lg:flex-row lg:w-5/6 lg:h-3/4 lg:mx-0 lg:my-0 lg:justify-around lg:items-start"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-1/4 h-1/4 rounded-lg shadow-xl mt-8 lg:w-1/3 lg:h-1/2 lg:mt-0 lg:ml-8 lg:mr-8"
            ></img>
            <h1>{country.name.common}</h1>
            <p>{country.name.nativeName[firstLanguageKey].common}</p>
            <p>{country.population.toLocaleString("es-ES")}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
            <p>{country.tld}</p>
            <p>{country.currencies[firstCurrencyKey].name}</p>
            <p>
              {Object.entries(country.languages).map(([key, value]) => (
                <span key={key}>{value},</span>
              ))}
            </p>
            <div>
              {country.borders.map((border, index) => (
                <button
                  className="w-10 shadow-xl"
                  key={index}
                  onClick={() => setSearchTerm(border)}
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubFlag;
