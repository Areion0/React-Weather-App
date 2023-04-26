/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import sunny from '../images/sunny.png';
import cloudy from '../images/cloudy.png';
import partlycloudy from '../images/partlycloudy.png';
import rain from '../images/rain.png';
import earth from '../images/earth.png';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY.toString();

const Weather = ({ city: givenCityName, setCondition: setConditionCallback, setLoading }) => {
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
                setLoading(false);
                setError('City not found');
                setWeatherData(null);
            }
        };

        if (givenCityName !== '') {
            fetchWeatherData();
        }
    }, [givenCityName]);

    const setCondition = (weatherCondition) => {
        switch (weatherCondition) {
            case 'Sunny':
                setConditionCallback(sunny)
                break;
            case 'Partly cloudy':
                setConditionCallback(partlycloudy);
                break;
            case 'Cloudy':
                setConditionCallback(cloudy);
                break;
            default:
                setConditionCallback(earth);
        }
        if (weatherCondition.includes('rain')) {
            setConditionCallback(rain);
        }
    }

    useEffect(() => {
        if (weatherData !== null) {
            setConditionCallback(weatherData.current.condition.text);
            setCondition(weatherData.current.condition.text);
            console.log(weatherData.current.condition.text);
        }
    }, [weatherData, setConditionCallback]);

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
