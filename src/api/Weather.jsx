import React from 'react';
import axios from 'axios';

// Fetching Current Weather
async function fetchCurrentWeather() {

    // const options = {
    //     method: 'GET',
    //     url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    //     params: { lon: '75.82722906466834', lat: '22.694271254975863' },
    //     headers: {
    //         'x-rapidapi-key': '3c3dccfe74msh886ce30c094c51fp1150d0jsn34f32b232ba4',
    //         'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     return response.data.data[0];
    // }).catch(function (error) {
    //     return error;
    // });
}

// Fetching Today's Weather
async function fetchTodaysWeather() {
    const options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
        params: { lat: '22.694271254975863', lon: '75.82722906466834' },
        headers: {
            'x-rapidapi-key': '3c3dccfe74msh886ce30c094c51fp1150d0jsn34f32b232ba4',
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

export default fetchCurrentWeather;
export { fetchCurrentWeather, fetchTodaysWeather };