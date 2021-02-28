import React from 'react';

import MostSunny from '../icons/mostly-sunny.svg';
import Sunny from '../icons/sunny.svg';

const Next5Days = () => {

    return (
        <>
            <div className="next-5-days">
                <h2 className="next-5-days__heading">Next 5 days</h2>
                <div className="next-5-days__container">

                    <div className="next-5-days__row">

                        <div className="next-5-days__date">
                            <span>Tue</span>
                            <div className="next-5-days__label">30/7</div>
                        </div>

                        <div className="next-5-days__low">
                            <span>10&deg;</span>
                            <div className="next-5-days__label">Low</div>
                        </div>

                        <div className="next-5-days__high">
                            <span>21&deg;</span>
                            <div className="next-5-days__label">High</div>
                        </div>

                        <div className="next-5-days__icon">
                            <img src={Sunny} alt="Sunny" />
                        </div>

                        <div className="next-5-days__rain">
                            <span>0%</span>
                            <div className="next-5-days__label">Rain</div>
                        </div>

                        <div className="next-5-days__wind">
                            <span>12mph</span>
                            <div className="next-5-days__label">Wind</div>
                        </div>

                    </div>
                    <div className="next-5-days__row">

                        <div className="next-5-days__date">
                            <span>Wed</span>
                            <div className="next-5-days__label">31/7</div>
                        </div>

                        <div className="next-5-days__low">
                            <span>9&deg;</span>
                            <div className="next-5-days__label">Low</div>
                        </div>

                        <div className="next-5-days__high">
                            <span>18&deg;</span>
                            <div className="next-5-days__label">High</div>
                        </div>

                        <div className="next-5-days__icon">
                            <img src={MostSunny} alt="Mostly sunny" />
                        </div>

                        <div className="next-5-days__rain">
                            <span>3%</span>
                            <div className="next-5-days__label">Rain</div>
                        </div>

                        <div className="next-5-days__wind">
                            <span>7mph</span>
                            <div className="next-5-days__label">Wind</div>
                        </div>

                    </div>
                    <div className="next-5-days__row">

                        <div className="next-5-days__date">
                            <span>Thur</span>
                            <div className="next-5-days__label">1/8</div>
                        </div>

                        <div className="next-5-days__low">
                            <span>7&deg;</span>
                            <div className="next-5-days__label">Low</div>
                        </div>

                        <div className="next-5-days__high">
                            <span>15&deg;</span>
                            <div className="next-5-days__label">High</div>
                        </div>

                        <div className="next-5-days__icon">
                            <img src={MostSunny} alt="Mostly sunny" />
                        </div>

                        <div className="next-5-days__rain">
                            <span>75%</span>
                            <div className="next-5-days__label">Rain</div>
                        </div>

                        <div className="next-5-days__wind">
                            <span>11mph</span>
                            <div className="next-5-days__label">Wind</div>
                        </div>

                    </div>
                    <div className="next-5-days__row">

                        <div className="next-5-days__date">
                            <span>Tue</span>
                            <div className="next-5-days__label">2/8</div>
                        </div>

                        <div className="next-5-days__low">
                            <span>12&deg;</span>
                            <div className="next-5-days__label">Low</div>
                        </div>

                        <div className="next-5-days__high">
                            <span>24&deg;</span>
                            <div className="next-5-days__label">High</div>
                        </div>

                        <div className="next-5-days__icon">
                            <img src={Sunny} alt="Sunny" />
                        </div>

                        <div className="next-5-days__rain">
                            <span>2%</span>
                            <div className="next-5-days__label">Rain</div>
                        </div>

                        <div className="next-5-days__wind">
                            <span>8mph</span>
                            <div className="next-5-days__label">Wind</div>
                        </div>

                    </div>
                    <div className="next-5-days__row">

                        <div className="next-5-days__date">
                            <span>Tue</span>
                            <div className="next-5-days__label">30/7</div>
                        </div>

                        <div className="next-5-days__low">
                            <span>10&deg;</span>
                            <div className="next-5-days__label">Low</div>
                        </div>

                        <div className="next-5-days__high">
                            <span>21&deg;</span>
                            <div className="next-5-days__label">High</div>
                        </div>

                        <div className="next-5-days__icon">
                            <img src={MostSunny} alt="Mostly sunny" />
                        </div>

                        <div className="next-5-days__rain">
                            <span>0%</span>
                            <div className="next-5-days__label">Rain</div>
                        </div>

                        <div className="next-5-days__wind">
                            <span>12mph</span>
                            <div className="next-5-days__label">Wind</div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Next5Days;