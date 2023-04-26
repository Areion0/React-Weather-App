import './App.css';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';
import { useCallback, useState } from 'react';
import sunny from './images/sunny.png';
import cloudy from './images/cloudy.png';
import partlycloudy from './images/partlycloudy.png';
import rain from './images/rain.png';
import earth from './images/earth.png';


function App() {
  const [city, setCity] = useState('');
  const [condition, setCondition] = useState(earth);

  const handleSearch = (city) => {
    // Handle search logic here
    console.log('Searching for city:', city);
    setCity(city);
  };

  const onFetch = useCallback((weatherCondition) => {
    switch (weatherCondition) {
      case 'Sunny':
        setCondition(sunny)
        break;
      case 'Partly cloudy':
        setCondition(partlycloudy);
        break;
      case 'Cloudy':
        setCondition(cloudy);
        break;
      default:
        setCondition(earth);
    }
    if (weatherCondition.includes('rain')) {
      setCondition(rain);
    }
  }, [setCondition])

  return (
    <div className="App">
      <header className="App-header">
        <img src={condition} alt="logo" />
        <SearchBar onSearch={handleSearch}></SearchBar>
        <Weather onFetch={onFetch} city={city}></Weather>
      </header>
    </div>
  );
}

export default App;
