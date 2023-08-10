import React, { useEffect, useState } from "react";
import CardCountry from "./CardCountry";
import SearchCountry from "./SearchCountry";
import RegionFilter from "./RegionFilter";
import Header from "./Header";

const URL = "https://restcountries.com/v3.1/all";

const Home = () => {
  const [results, setResults] = useState([]);
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [searchRegion, setSearchRegion] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data);
    }
    getData();
  }, []);

  useEffect(() => {
    const newCountry = results.map((item) => {
      const commonName = item.name.common;
      const populate = item.population;
      const reg = item.region;
      const cap = item.capital ? item.capital : "NO CAP";
      const flag = item.flag;
      const countryCode = item.cca2;

      return {
        name: commonName,
        population: populate,
        region: reg,
        capital: cap,
        flag: flag,
        countryCode: countryCode,
      };
    });
    setCountry(newCountry);
  }, [results]);

  const handleNameChange = (event) => {
    setSearch(event.target.value);
  };
  const handleRegionChange = (event) => {
    setSearchRegion(event.target.value);
  };

  return (
    <div className="text-white">
      <Header />

      <div className="flex flex-col sm:flex-row m-14 mx-18">
        <SearchCountry settingSearch={handleNameChange} />
        <RegionFilter regionChange={handleRegionChange} val="" />
      </div>

      <div className="grid grid-cols-gridCol gap-y-16 ml-20">
        {country
          .filter((item) => {
            return searchRegion === ""
              ? item
              : item.region.includes(searchRegion);
          })
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item, index) => {
            return <CardCountry detail={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Home;
