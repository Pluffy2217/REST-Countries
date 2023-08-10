import React from "react";

const CardCountry = (props) => {
  const code = props.detail.countryCode.toLowerCase();

  return (
    <article className="rounded-md w-72 md:w-80 -ml-10 md:m-0 bg-primary-dark-blue">
      <a href={`/about?id=${props.detail.countryCode}`}>
        <div className="w-full">
          <img
            src={`https://flagcdn.com/w320/${code}.png`}
            className="h-44 w-full rounded-t-md"
          />
        </div>
        <div className="relative bottom-5">
          <div className="px-8 py-8">
            <p className="font-bold text-sm py-3 ">{props.detail.name}</p>
            <div className="flex">
              <p className="font-semibold mr-1 text-sm">Population: </p>{" "}
              <p className="text-sm">{props.detail.population}</p>
            </div>
            <div className="flex">
              <p className="font-semibold mr-1 text-sm">Region: </p>{" "}
              <p className="text-sm">{props.detail.region}</p>
            </div>
            <div className="flex">
              <p className="font-semibold mr-1 text-sm">Capital:</p>{" "}
              <p className="text-sm">{props.detail.capital}</p>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default CardCountry;
