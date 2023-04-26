import './App.css';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';
import { useCallback, useState } from 'react';
import earth from './images/earth.png';




function App() {
  const [city, setCity] = useState('');
  const [condition, setCondition] = useState(earth);
  const [loading, setLoading] = useState(false);

  const handleSearch = (city) => {
    console.log('Searching for city:', city);
    setCity(city);
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={condition} alt="logo" />
        <SearchBar onSearch={handleSearch} loading={loading}></SearchBar>
        <Weather setCondition={setCondition} city={city} setLoading={setLoading}></Weather>
      </header>
    </div>
  );
}

export default App;
