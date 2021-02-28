import React, { useEffect } from 'react';
import axios from 'axios';

import MostSunny from '../icons/mostly-sunny.svg';
import Sunny from '../icons/sunny.svg';

const Today = () => {
    

    return (
        <>
            <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="weather-by-hour__container">
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">3am</div>
                        <img src={MostSunny} alt="Mostly sunny" />
                        <div>14&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">6am</div>
                        <img src={MostSunny} alt="Mostly sunny" />
                        <div>16&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">9am</div>
                        <img src={MostSunny} alt="Mostly sunny" />
                        <div>17&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">12pm</div>
                        <img src={MostSunny} alt="Mostly sunny" />
                        <div>19&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">3pm</div>
                        <img src={Sunny} alt="Sunny" />
                        <div>21&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">6pm</div>
                        <img src={Sunny} alt="Sunny" />
                        <div>20&deg;</div>
                    </div>
                    <div className="weather-by-hour__item">
                        <div className="weather-by-hour__hour">9pm</div>
                        <img src={MostSunny} alt="Mostly sunny" />
                        <div>18&deg;</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Today;