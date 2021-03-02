import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/NextDays.css';

import { WeatherData } from './Current';

const NextDays = () => {
    // Get Day from Date
    const getDayValue = (dateValue) => {
        const day = new Date(dateValue).getDay();
        if (day === 1)
            return 'Mon';
        else if (day === 2)
            return 'Tue';
        else if (day === 3)
            return 'Wed';
        else if (day === 4)
            return 'Thu';
        else if (day === 5)
            return 'Fri';
        else if (day === 6)
            return 'Sat';
        else
            return 'Sun';
    }

    // Get Date & Month from FullDate
    const getDateMonth = (dateValue) => {  
        const date = new Date(dateValue);
        return `${date.getDate()}/${date.getMonth() + 1}`;
    }

    return (
        <>
            <div className="next-3-days mb-5">
                <h2 className="next-3-days__heading">Next 3 days</h2>
                <div className="next-3-days__container"></div>

                {
                    React.useContext(WeatherData).forecast.forecastday.map((dayData, index, forecast) => {
                        return (
                            <>
                                <div className="next-3-days__row">
                                    <div className="row">
                                        {/* Day/Date */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{getDayValue(dayData.date)}</span>
                                            <div className="next-3-days__label">{getDateMonth(dayData.date)}</div>
                                        </div>

                                        {/* Status Icon */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <img src={dayData.day.condition.icon} style={{ "marginTop": "-4px"}} alt={"MostSunny"} />
                                        </div>

                                        {/* Low Temperature */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.mintemp_c}&deg;</span>
                                            <div className="next-3-days__label">Low</div>
                                        </div>

                                        {/* High Temperature */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.maxtemp_c}&deg;</span>
                                            <div className="next-3-days__label">High</div>
                                        </div>

                                        {/* Clouds */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.daily_will_it_rain ? 'Yes' : 'No'}</span>
                                            <div className="next-3-days__label">Rain</div>
                                        </div>

                                        {/* Humidity */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.avghumidity}%</span>
                                            <div className="next-3-days__label">Humidity</div>
                                        </div>

                                        {/* Max Wind */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.maxwind_mph}mph</span>
                                            <div className="next-3-days__label">Max-Wind</div>
                                        </div>

                                        {/* Avg Visibility */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.day.avgvis_km}km</span>
                                            <div className="next-3-days__label">Visibility</div>
                                        </div>

                                        {/* Sunrise */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.astro.sunrise}</span>
                                            <div className="next-3-days__label">Sunrise</div>
                                        </div>

                                        {/* Sunset */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.astro.sunset}</span>
                                            <div className="next-3-days__label">Sunset</div>
                                        </div>

                                        {/* Moonrise */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.astro.moonrise}</span>
                                            <div className="next-3-days__label">Moonrise</div>
                                        </div>

                                        {/* Moonset */}
                                        <div className="col-sm-2 col-4 mt-sm-2 mt-3">
                                            <span>{dayData.astro.moonset}</span>
                                            <div className="next-3-days__label">Moonset</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default NextDays;