import React, { useState } from "react";
import "../styles/SearchBar.css";
import { getFormatedCitiesData } from "../getFormatedCitiesData";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ placeholder, data }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [textEntered, setTextEntered] = useState("");
  const [expanded, setExpanded] = useState(false);
  const citiesData = getFormatedCitiesData(data);

  const expand = () => setExpanded(true);

  const close = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 200);
  };

  const getFilteredCities = (event) => {
    const searchText = event.target.value;
    setTextEntered(searchText);

    if (searchText.trim() === "") {
      setFilteredCities([]);
    } else if (searchText.length > 1) {
      const filteredData = citiesData.filter((city) => {
        return city.name
          .toLowerCase()
          .includes(searchText.toLowerCase().trim());
      });
      setFilteredCities(filteredData);
    }
  };

  const getSelectedCity = (city) => {
    setTextEntered(city.name + ", " + city.region);
    setFilteredCities([]);
    close();
    // our api to fetch the select result
    console.log(`Selected city ID: ${city.id}`);
    console.log(city);
  };

  const clearInput = () => {
    setTextEntered("");
    setFilteredCities([]);
  };

  return (
    <div className="search" onBlur={close}>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={textEntered}
          onChange={getFilteredCities}
          onFocus={expand}
        />
        <div className="searchIcon">
          {textEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredCities.length > 1 && expanded && (
        <div className="dataResult-wrapper">
          <div className="dataResult">
            {filteredCities.slice(0, 50).map((city) => {
              return (
                <p
                  key={city.id}
                  className="dataItem"
                  onClick={() => getSelectedCity(city)}
                >
                  {city.name + ", " + city.region}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
