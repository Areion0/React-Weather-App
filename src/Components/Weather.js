import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = "7923c4967394427d951110345232504";

const Weather = ({ city: givenCityName, onFetch, setLoading }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState(givenCityName);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${givenCityName}`
                );
                setLoading(false);
                console.log('Weather data:', response.data);
                setWeatherData(response.data);
                setCityName(response.data.location.name);
                setError(null);
            } catch (error) {
                setError('City not found');
                setWeatherData(null);
            }
        };

        if (givenCityName !== '') {
            fetchWeatherData();
        }
    }, [givenCityName]);

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
            <h2>Current Weather in {cityName}</h2>
            <p>{temp_c}°C</p>
            <p>{condition.text}</p>
        </div>
    );
};

export default Weather;
