import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import MostSunny from '../icons/mostly-sunny.svg';
import Sunny from '../icons/sunny.svg';

const Next5Days = () => {

    return (
        <>
            <div className="next-3-days">
                <h2 className="next-3-days__heading">Next 3 days</h2>
                <div className="next-3-days__container">

                    <div className="next-3-days__row">
                        <div className="row">
                            {/* Day/Date */}
                            <div className="col-sm-2 col-4">
                                <span>Wed</span>
                                <div className="text-secondary"><small>31/7</small></div>
                            </div>

                            {/* Status Icon */}
                            <div className="col-sm-2 col-4">
                                <img src={MostSunny} alt={"MostSunny"} />
                            </div>

                            {/* Low Temperature */}
                            <div className="col-sm-2 col-4">
                                <span>21&deg;</span>
                                <div className="text-secondary"><small>Low</small></div>
                            </div>

                            {/* High Temperature */}
                            <div className="col-sm-2 col-4">
                                <span>25&deg;</span>
                                <div className="text-secondary"><small>High</small></div>
                            </div>

                            {/* Clouds */}
                            <div className="col-sm-2 col-4">
                                <span>0%</span>
                                <div className="text-secondary"><small>Clouds</small></div>
                            </div>

                            {/* Humidity */}
                            <div className="col-sm-2 col-4">
                                <span>0%</span>
                                <div className="text-secondary"><small>Humidity</small></div>
                            </div>

                            {/* Max Wind */}
                            <div className="col-sm-2 col-4">
                                <span>7mph</span>
                                <div className="text-secondary"><small>Max-Wind</small></div>
                            </div>
                            
                            {/* Avg Visibility */}
                            <div className="col-sm-2 col-4">
                                <span>7km</span>
                                <div className="text-secondary"><small>Visibility</small></div>
                            </div>

                            {/* Sunrise */}
                            <div className="col-sm-2 col-4">
                                <span>06:00 AM</span>
                                <div className="text-secondary"><small>Sunrise</small></div>
                            </div>

                            {/* Sunset */}
                            <div className="col-sm-2 col-4">
                                <span>06:00 PM</span>
                                <div className="text-secondary"><small>Sunset</small></div>
                            </div>
                            
                            {/* Moonrise */}
                            <div className="col-sm-2 col-4">
                                <span>06:00 AM</span>
                                <div className="text-secondary"><small>Moonrise</small></div>
                            </div>

                            {/* Moonset */}
                            <div className="col-sm-2 col-4">
                                <span>06:00 PM</span>
                                <div className="text-secondary"><small>Moonset</small></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Next5Days;