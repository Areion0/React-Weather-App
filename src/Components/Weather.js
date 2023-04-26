import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';

const Weather = ({ city, onFetch }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.weatherapi.com/v1/current.json?key=7923c4967394427d951110345232504&q=${city}`
                );
                console.log('Weather data:', response.data);
                setWeatherData(response.data);
                setError(null);
            } catch (error) {
                setError('City not found');
                setWeatherData(null);
            }
        };

        if (city !== '') {
            fetchWeatherData();
        }
    }, [city]);

    useEffect(() => {
        if (weatherData !== null) {
            onFetch(weatherData.current.condition.text);
            console.log(weatherData.current.condition.text);
        }
    }, [weatherData, onFetch]);

    if (error) {
        return (
            <div>
                <h2>{error}</h2>
            </div>
        );
    }

    if (!weatherData) {
        return (
            <div>
                <h2>Enter your city above</h2>
            </div>
        );
    }

    const { temp_c, condition } = weatherData.current;

    return (
        <div>
            <h2>Current Weather in {city}</h2>
            <p>{temp_c}°C</p>
            <p>{condition.text}</p>
        </div>
    );
};

export default Weather;
