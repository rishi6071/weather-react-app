import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import './css/Today.css';

import NextDays from './NextDays';
import { WeatherData } from './Current';

const Today = () => {
    // Get Time from DateTime
    const getTime = (datetime) => {
        const time = new Date(datetime).toLocaleTimeString();
        let [colonPosition, spacePosition] = [time.indexOf(':'), time.indexOf(' ')];
        let miniTime = time.replace(time.substring(colonPosition, spacePosition + 1), '');
        return miniTime.replace('M', 'm');
    }

    return (
        <>
            <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="row">
                    {
                        React.useContext(WeatherData).forecast.forecastday[0].hour.map((hourData, index, completeDayData) => {
                            if (index % 2 == 0) {
                                return (
                                    <>
                                        <div className="col-md-2 col-sm-3 col-4 p-2">
                                            <div className="weather-by-hour__item">
                                                <div className="weather-by-hour__hour">{getTime(hourData.time)}</div>
                                                <img src={hourData.condition.icon} alt={hourData.condition.text} />
                                                <div>{hourData.temp_c}&deg;</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>

            {/* Next 5 Days Weather */}
            <NextDays />
        </>
    );
}

export default Today;