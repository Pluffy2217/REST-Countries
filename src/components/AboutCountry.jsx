import React, { useEffect, useState } from "react";
import Header from "./Header";
import LeftArrow from "./icons/leftArrow";
import "../index.css"

const urlParams = new URLSearchParams(window.location.search);
const BASE_URL = "https://restcountries.com/v3.1/alpha/";
const CODES_URL = "https://restcountries.com/v3.1/alpha?codes=";

const AboutCountry = () => {
  const [results, setResults] = useState([]);
  const [country, setCountry] = useState([]);
  const [borderNames, setBorderNames] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(BASE_URL + "/" + urlParams.get("id"));
      const data = await response.json();
      setResults(data);
    }

    getData();
  }, []);

  useEffect(() => {
    const request = async () => {
      if (results.length > 0 && results[0].borders) {
        const response = await fetch(
          CODES_URL + results.map((item) => item.borders).join(",")
        );
        const data = await response.json();
        setBorderNames(
          data.map((item) => {
            return {
              name: item.name.common,
              id: item.cca2,
            };
          })
        );
      }
    };
    request();
  }, [results]);

  useEffect(() => {
    const newCountry = results.map((item) => {
      return {
        name: item.name.common,
        population: item.population,
        region: item.region,
        capital: item.capital ? item.capital : "NO CAP",
        flag: item.flag,
        // nativeName: Object.values(item.name.nativeName)
        //   .map((item) => item.official)
        //   .join(", "),
        nativeName: item.name.common,
        subRegion: item.subregion,
        tld: item.tld.length > 0 ? item.tld[0] : "NO TLD",
        currencies: item.currencies[Object.keys(item.currencies)[0]].name,
        languages: Object.values(item.languages).join(", "),
        countryCode: item.cca2.toLowerCase(),
      };
    });
    setCountry(newCountry);
  }, [results]);

  return (
    <div className="text-white flex flex-col">
      <Header />

      <a href="/">
        <div className="rounded-sm w-32 h-10 bg-primary-dark-blue mt-10 ml-10 flex items-center justify-center space-x-3">
          <LeftArrow className="absolute" />
          <button className="font-light">Back</button>
        </div>
      </a>

      {country.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center space-x-20 mt-16 -ml-10"
          >
            <div className="sm:w-45 w-90 sm:h-30 h-60 ml-10 sm:ml-0">
              <img
                src={`https://flagcdn.com/w320/${item.countryCode}.png`}
                className="w-full h-full"
              />
            </div>

            <div className="mt-16 md:mt-0">
              <p className="text-3xl font-bold mb-10">{item.name}</p>

              <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-52 md:mb-16 mb-7">
                <div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Native Name:</p>
                    <p className="font-light">{item.nativeName}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Population:</p>
                    <p className="font-light">{item.population}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Region:</p>
                    <p className="font-light">{item.region}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Sub Region:</p>
                    <p className="font-light">{item.subRegion}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Capital:</p>
                    <p className="font-light">{item.capital}</p>
                  </div>
                </div>

                <div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Top Level Domain:</p>
                    <p className="font-light">{item.tld}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Currencies:</p>
                    <p className="font-light">{item.currencies}</p>
                  </div>
                  <div className="flex text-sm mb-3">
                    <p className="font-semibold mr-1">Languages:</p>
                    <p className="font-light">{item.languages}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <p>Border Countries:</p>
                {borderNames.length > 0 && (
                  <div className="grid grid-cols-3 ml-2 mt-5 md:mt-0 mr-10 md:mr-0">
                    {borderNames.map((item) => {
                      function limitCharacters(inputString, maxLength) {
                        if (inputString.length <= maxLength) {
                          return inputString;
                        } else {
                          return inputString.substring(0, maxLength) + "...";
                        }
                      }

                      const originalString = item.name;
                      const maxLength = 10;
                      const limitedString = limitCharacters(
                        originalString,
                        maxLength
                      );

                      return (
                        <a href={`/about?id=${item.id}`} key={item.id}>
                          <div className="rounded-sm w-20 h-8 bg-primary-dark-blue mb-2 mr-2 text-xs flex items-center justify-center">
                            <button className="text-center">
                              {limitedString}
                            </button>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
                {borderNames.length === 0 && <p>{null}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCountry;
