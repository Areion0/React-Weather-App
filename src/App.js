import logo from './logo.svg';
import './App.css';
import WeatherComponent from './WeatherComponent';
import SearchBar from './SearchBar';
import { useState } from 'react';




function App() {
  const [city, setCity] = useState('Athens');

  const handleSearch = (city) => {
    // Handle search logic here
    console.log('Searching for city:', city);
    setCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar onSearch={handleSearch}></SearchBar>
        <WeatherComponent city={city}></WeatherComponent>
      </header>
    </div>
  );
}

export default App;
