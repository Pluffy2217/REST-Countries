import React from "react";
import IconSearch from "./icons/search";

const SearchCountry = (props) => {
    return (
        <div className="flex-auto">
            <div className="relative flex  items-center">
                <span className="absolute ml-4 mt-1"><IconSearch /></span>
                <input 
                    placeholder="Search for a country"
                    onChange={props.settingSearch}
                    className="bg-primary-dark-blue px-11 py-4 w-auto focus:outline focus:outline-transparent placeholder:text-sm rounded-md"
                />
            </div>
        </div>
    )

}

export default SearchCountry