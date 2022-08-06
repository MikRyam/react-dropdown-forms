// import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.jsx';
import SelectBar from './components/SelectBar.jsx';
import SelectDate from './components/SelectBar.jsx';
import CityData from './cities.json';
import ColorData from './colors.json';
import timeData from './timeData.js';

function App() {

  return (
    <div className="App">
      <SearchBar placeholder='Введите город...' data={CityData} />
      <SelectBar placeholder='Выберите цвет' data={ColorData} item='color' customWidth='249px' zIndex1='70' zIndex2='60' />
      <SelectBar placeholder='00:00' data={timeData} item='time' customWidth='100px' zIndex1='50' zIndex2='40' />
      <SelectDate placeholder='00:00' data={timeData} item='time' customWidth='100px' zIndex1='50' zIndex2='40' />

    </div >
  );
};

export default App;
