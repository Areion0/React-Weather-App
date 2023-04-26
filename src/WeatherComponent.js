import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';


const WeatherComponent = ({ city, onFetch }) => {

    const [weatherData, setWeatherData] = useState(null);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/current.json?key=7923c4967394427d951110345232504&q=${city}`
            );
            console.log('Weather data:', response.data)
            setWeatherData(response.data);
            if (weatherData !== null) {
                onFetch(weatherData.current.condition.text);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        if (city !== '') {
            fetchWeatherData();
        }
    }, [city]);

    useEffect(() => {
        if (weatherData !== null) {
            onFetch(weatherData.current.condition.text);
            console.log(weatherData.current.condition.text);
        }
    }, [weatherData]);

    if (!weatherData) return (
        <div>
            <h2>Enter your city above</h2>
        </div>
    );

    const { temp_c, condition } = weatherData.current;

    return (
        <div>
            <h2>Current Weather in {city}</h2>
            <p>Temperature: {temp_c}°C</p>
            <p>Weather Condition: {condition.text}</p>
        </div>
    );
};

export default WeatherComponent;