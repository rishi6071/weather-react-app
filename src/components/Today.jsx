import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Today = () => {
    // Todays Weather
    const [todayWeather, setTodayWeather] = useState(JSON.parse(localStorage.getItem('weatherData')).forecast.forecastday[0]);
    console.log(todayWeather.hour);

    // Get Time from DateTime
    const getTime = (datetime) => {
        const time = new Date(datetime).toLocaleTimeString();
        let [colonPosition, spacePosition] = [time.indexOf(':'), time.indexOf(' ')];
        return time.replace(time.substring(colonPosition, spacePosition + 1), '');
    }

    return (
        <>
            <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="weather-by-hour__container">
                    {
                        todayWeather.hour.map((hourData, index, completeDayData) => {
                            if (index != 0 && index % 3 == 0) {
                                return (
                                    <>
                                        <div className="weather-by-hour__item">
                                            <div className="weather-by-hour__hour">{getTime(hourData.time)}</div>
                                            <img src={hourData.condition.icon} alt={hourData.condition.text} />
                                            <div>{hourData.temp_c}&deg;</div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Today;