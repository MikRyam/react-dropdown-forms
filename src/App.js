// import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SelectBar from './components/SelectBar.jsx';
import SelectDate from './components/SelectDate.jsx';
import CityData from './data/cities.json';
import ColorData from './data/colors.json';
import timeData from './data/timeData.js';

function App() {

  return (
    <div className="App">
      <SearchBar placeholder='Введите город...' data={CityData} />
      <SelectBar placeholder='Выберите цвет' data={ColorData} item='color' customWidth='249px' zIndex1='880' zIndex2='850' />
      <SelectDate />
      <SelectBar placeholder='00:00' data={timeData} item='time' customWidth='90px' zIndex1='50' zIndex2='40' />
    </div >
  );
};

export default App;
