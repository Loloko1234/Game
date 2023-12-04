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
          <div key={index} className="lg:flex mt-10  lg:text-xl text-base ">
            <div className="pierwszydiv lg:flex ">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="ml-11 lg:min-w-0 min-w-auto h-auto first-letter:lg:w-[700px] lg:h-[400px] rounded-lg shadow-xl"
              />
            </div>
            <div className="w-auto flex lg:flex-wrap flex-col lg:flex-row lg:mt-8 mt-10">
              <div className="drugidiv ml-11 lg:ml-5 2xl:ml-20 lg:w-max h-72">
                <h1 className="font-bold lg:text-4xl text-2xl mb-2">
                  {country.name.common}
                </h1>
                <p className=" mt-10 lg:mt-4">
                  <span className="font-semibold">Native Name: </span>
                  {country.name.nativeName[firstLanguageKey].common}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString("es-ES")}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="trzecidiv lg:mt-[3.25rem] h-40 lg:w-[220px] ml-11 lg:ml-20 2xl:ml-36">
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.tld}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Currencies: </span>
                  {country.currencies[firstCurrencyKey].name}
                </p>
                <p className=" mt-4 lg:mt-3">
                  <span className="font-semibold">Languages: </span>
                  {Object.entries(country.languages).map(([key, value]) => (
                    <span key={key}>{value},</span>
                  ))}
                </p>
              </div>
              <div className="czwartdiv lg:mt-0 2xl:mt-4 ml-11 lg:ml-5 2xl:ml-20 h-20 lg:mr-20 mr-8">
                <span className="font-semibold">Border Countries: </span>
                {borderNames.map((borderName, index) => (
                  <button
                    className={`p-2 m-1 min-w-[50px] lg:min-w-[130px]  rounded-md shadow-xl lg:text-base text-base font-extralight flex-wrap flex-row ${
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
