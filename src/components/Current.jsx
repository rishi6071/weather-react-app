import React, { useEffect, useState } from 'react';
import axios from 'axios';

import MostSunny from '../icons/mostly-sunny.svg';
import Sunny from '../icons/sunny.svg';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { fetchCurrentWeather, fetchTodaysWeather } from '../api/Weather';

const Current = () => {
    // useState for Current Weather
    const [currentData, setCurrentData] = useState({});

    // useEffect for Current Weather
    useEffect(() => {

        // Calling API for Current Weather
        const options = {
            method: 'GET',
            url: 'https://community-open-weather-map.p.rapidapi.com/weather',
            params: {
                q: 'Indore,in',
                lat: '0',
                lon: '0',
                callback: 'test',
                id: '2172797',
                lang: 'null',
                units: '"metric" or "imperial"',
                mode: 'xml, html'
            },
            headers: {
                'x-rapidapi-key': '3c3dccfe74msh886ce30c094c51fp1150d0jsn34f32b232ba4',
                'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
            }
        };
    
        axios.request(options).then(function (response) {
            console.log(JSON.parse(response.data.substring(5, response.data.length - 1)));
            return response.data.substring(5, response.data.length - 1);
        }).catch(function (error) {
            console.error(error);
        });
    });

    return (
        <>
            <div className="location-and-date">
                <h1 className="location-and-date__location">London, UK</h1>
                <div>Sunday 4th August</div>
            </div>


            <div className="current-temperature">
                <div className="current-temperature__icon-container">
                    <img src={MostSunny} className="current-temperature__icon" alt="" />
                </div>
                <div className="current-temperature__content-container">
                    <div className="current-temperature__value">21&deg;</div>
                    <div className="current-temperature__summary">Mostly Sunny</div>
                </div>
            </div>


            <div className="current-stats">
                <div>
                    <div className="current-stats__value">23&deg;</div>
                    <div className="current-stats__label">High</div>
                    <div className="current-stats__value">14&deg;</div>
                    <div className="current-stats__label">Low</div>
                </div>
                <div>
                    <div className="current-stats__value">7mph</div>
                    <div className="current-stats__label">Wind</div>
                    <div className="current-stats__value">0%</div>
                    <div className="current-stats__label">Rain</div>
                </div>
                <div>
                    <div className="current-stats__value">05:27</div>
                    <div className="current-stats__label">Sunrise</div>
                    <div className="current-stats__value">20:57</div>
                    <div className="current-stats__label">Sunset</div>
                </div>
            </div>
        </>
    );
}

export default Current;