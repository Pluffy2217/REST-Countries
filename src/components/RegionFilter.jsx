import React from "react";

const RegionFilter = (props) => {
    return(
        <div className="mr-4 mt-7 -mb-4 sm:mt-0 sm:-mb-4">
        <select onChange={props.regionChange} className="bg-primary-dark-blue p-5 text-xs rounded-md font-bold">
            <option value={props.val}>Filter by region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
      </select>
        </div>
    )
}

export default RegionFilter