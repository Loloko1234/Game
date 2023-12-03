import React, { useState, useEffect } from "react";

const SubFlag = ({ clickedLink, isDarkMode }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(clickedLink);
  const [borderNames, setBorderNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const url = `https://restcountries.com/v3.1/name/${searchTerm}`;
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }

          const data = await response.json();
          setCountries(data.slice(0, 1));
          const borderNamesPromises =
            data[0]?.borders.map((border) => fetchCountryName(border)) || [];
          const resolvedNames = await Promise.all(borderNamesPromises);
          setBorderNames(resolvedNames);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const fetchCountryName = async (border) => {
    try {
      const alphaUrl = `https://restcountries.com/v3.1/alpha?codes=${border}`;
      const response = await fetch(alphaUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      return data[0]?.name?.common || border;
    } catch (error) {
      console.error("Error fetching country name:", error);
      return border;
    }
  };

  return (
    <div>
      {countries.map((country, index) => {
        const firstLanguageKey = Object.keys(country.name.nativeName)[0];
        const firstCurrencyKey = Object.keys(country.currencies)[0];

        return (
          <div key={index} className="flex mt-20 text-2xl">
            <div className="pierwszydiv">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="ml-20 w-[700px] h-[400px] rounded-lg shadow-xl"
              />
            </div>
            <div className="w-[1100px] flex flex-wrap">
              <div className="drugidiv ml-20 w-max h-72">
                <h1 className="font-bold text-4xl mb-2">
                  {country.name.common}
                </h1>
                <p className="mt-6">
                  <span className="font-semibold">Native Name: </span>
                  {country.name.nativeName[firstLanguageKey].common}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString("es-ES")}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="trzecidiv mt-[3.25rem] h-40 w-auto ml-32">
                <p className="mt-3">
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.tld}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Currencies: </span>
                  {country.currencies[firstCurrencyKey].name}
                </p>
                <p className="mt-3">
                  <span className="font-semibold">Languages: </span>
                  {Object.entries(country.languages).map(([key, value]) => (
                    <span key={key}>{value},</span>
                  ))}
                </p>
              </div>
              <div className="czwartdiv mt-8 h-20 ml-20 lg:mr-20 mr-8">
                <span className="font-semibold">Border Countries: </span>
                {borderNames.map((borderName, index) => (
                  <button
                    className={`p-2 m-3 min-w-[100px] rounded-md shadow-xl text-xl font-extralight ${
                      isDarkMode ? "bg-custom-color text-white" : "bg-white"
                    }`}
                    key={index}
                    onClick={() => setSearchTerm(borderName)}
                  >
                    {borderName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubFlag;
