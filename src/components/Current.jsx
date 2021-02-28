import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MostSunny from '../icons/mostly-sunny.svg';
import Sunny from '../icons/sunny.svg';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { fetchCurrentWeather, fetchTodaysWeather } from '../api/Weather';

const Current = () => {
    // Loading Confirmation
    const [loadConfirmation, setLoadConfirmation] = useState(false);

    // useState for Current Weather
    const [currentData, setCurrentData] = useState({});

    // useEffect for Current Weather
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: 'Indore', days: '3' },
            headers: {
                'x-rapidapi-key': '3c3dccfe74msh886ce30c094c51fp1150d0jsn34f32b232ba4',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setCurrentData(response.data);
            setLoadConfirmation(true);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    // Load Confirmation
    if (!loadConfirmation) {
        return "Nothing";
    }

    return (
        <>
            <div className="location-and-date">
                <h1 className="location-and-date__location">{currentData.location.name}, {currentData.location.country}</h1>
                <div>Last Updated - {currentData.current.last_updated}</div>
            </div>


            <div className="current-temperature">
                <div className="current-temperature__icon-container">
                    <img src={currentData.current.condition.icon} className="current-temperature__icon" alt="" />
                </div>
                <div className="current-temperature__content-container">
                    <div className="current-temperature__value">{currentData.current.temp_c}&deg;</div>
                    <div className="current-temperature__summary">{currentData.current.condition.text}</div>
                </div>
            </div>


            <div className="current-stats">
                <div>
                    <div className="current-stats__value">{currentData.forecast.forecastday[0].day.maxtemp_c}&deg;</div>
                    <div className="current-stats__label">High</div>
                    <div className="current-stats__value">{currentData.forecast.forecastday[0].day.mintemp_c}&deg;</div>
                    <div className="current-stats__label">Low</div>
                </div>
                <div>
                    <div className="current-stats__value">{Math.round(currentData.current.wind_mph)}mph</div>
                    <div className="current-stats__label">Wind</div>
                    <div className="current-stats__value">{currentData.current.cloud}%</div>
                    <div className="current-stats__label">Clouds</div>
                </div>
                <div>
                    <div className="current-stats__value">{currentData.forecast.forecastday[0].astro.sunrise}</div>
                    <div className="current-stats__label">Sunrise</div>
                    <div className="current-stats__value">{currentData.forecast.forecastday[0].astro.sunset}</div>
                    <div className="current-stats__label">Sunset</div>
                </div>
            </div>
        </>
    );
}

export default Current;