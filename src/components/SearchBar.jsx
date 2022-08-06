import React, { useState } from "react";
import "../styles/SearchBar.css";
import { getFormatedCitiesData } from "../getFormatedCitiesData";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const basicBorder = "1px solid #B4B4B4";
const errorBorder = '1px solid #ff8080';

const SearchBar = ({ placeholder, data }) => {
  const [filteredCities, setFilteredCities] = useState([]);
  const [textEntered, setTextEntered] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [isError, setIsError] = useState(false);

  const citiesData = getFormatedCitiesData(data);

  const [selected, setSelected] = useState('');
  const [expanded, setExpanded] = useState(false);

  function expand() {
      setExpanded(true);
  }

  function close() {      
      setTimeout(() => {
        setExpanded(false);    
      }, 200);
      if (textEntered) {
        setIsError(true);
      }
      console.log(selectedCity)
  }

  function select(event) {
      const searchText = event.target.textContent;
      setTextEntered(searchText)
      // callback(value);
      close();
      setSelected(searchText);
  }


  
  
  const getFilteredCities = (event) => {
    const searchText = event.target.value;
    setTextEntered(searchText);

    // if (searchText.trim() === "") {
    //   setFilteredCities([]);
    // } else if (searchText.length > 1) {
    //   const filteredData = citiesData.filter((city) => {
    //     return city.name
    //       .toLowerCase()
    //       .includes(searchText.toLowerCase().trim());
    //   });
    //   setFilteredCities(filteredData);
    // }

    // const filteredData = citiesData.filter((city) => {
    //   return city.name.toLowerCase().includes(searchText.toLowerCase().trim());
    // });

    // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  //   );
  // };

  // searchText.length > 1 &&
  // && cityFullName.toLowerCase() !== searchText.toLowerCase()
  // const cityFullName = city?.region ? city.name + ", " + city.region : city.name;

    // if (searchText.trim() === "") {
    //   setFilteredCities([]);
    // } else if (searchText.length > 1) {
    //   const filteredData = citiesData.filter((city) =>
    //   keys.some((key) => city[key].toLowerCase().includes(searchText.toLowerCase().trim())
    //   ));
    //   setFilteredCities(filteredData);
    // }
  };

  const getSelectedCity = (city) => {
    setSelectedCity(city.name + ", " + city.region);
    // setTextEntered(city?.region ? city.name + ", " + city.region : city.name);
    setTextEntered(city.name + ", " + city.region);
    // setTextEntered(city.name);
    // setSelectedCity("Hello");
    // setIsError(false);
    close();
    // setFilteredCities([]);
    console.log(`Selected city ID: ${city.id}`);
    console.log(selectedCity);
    console.log(city);
  };

  const clearInput = () => {
    setIsError(false);
    setTextEntered('');
    setFilteredCities([]);
    setSelectedCity('');
    
  };

  const handleClickOutside = () => {
    setFilteredCities([]);
    close();
    if (textEntered) {
      setIsError(true);
    }
    console.log(selectedCity)
  }

  return (
    <div className="search" onBlur={close}>
      <div className="searchInputs" style={{ border: isError ? errorBorder : basicBorder}} >
        <input
          // tabIndex="-1"
          // readOnly='readonly'
          type="text"
          placeholder={placeholder}
          value={textEntered}
          onChange={getFilteredCities}
          onFocus={expand}
          // onBlur={() => {
          //   setTimeout(() => {
          //     handleClickOutside();    
          //   }, 200);
          // }}
        />
        <div className="searchIcon">
          {textEntered.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {/*  tabIndex={0} onFocus={expand} onBlur={close} filteredCities.length !== 0 && expanded &&  */}
      {expanded && (
        <div className="dataResult-wrapper">
          <div className="dataResult">
            {/* {
              filteredCities
              .slice(0, 50)
              .map((city) => {
                // let region = city?.region ? ", " + city.region : "";
                return (
                  <p
                    key={city.id}
                    className="dataItem"
                    onClick={() => getSelectedCity(city)}
                  >
                    {city.name + ", " + city.region}
                  </p>
                );
              })
            } */}

            {citiesData
            .filter((city) => {
              const cityFullName = city.name + ", " + city.region;
              return (
                textEntered.trim() &&
                city.name.toLowerCase().includes(textEntered.toLowerCase().trim()) && 
                cityFullName.toLowerCase() !== textEntered.toLowerCase()
              );
            })            
            .slice(0, 50)
            .map((city) => {
              // let region = city?.region ? ", " + city.region : "";
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
