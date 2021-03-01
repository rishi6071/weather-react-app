import React, { useState } from 'react';
import Current from './Current';

import BrandLogo from '../logo/brandLogo.png';
import './css/SearchBar.css';

const LocationValue = React.createContext(null);

const SearchBar = () => {
    // Current SearchBar Input
    const [searchInput, setSearchInput] = useState("");

    // Current Submitted Location
    const [location, setLocation] = useState("Indore");
    localStorage.setItem('selectedLocation', location);

    return (
        <>
            <LocationValue.Provider value={location}>
                <nav className="navbar navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={BrandLogo} alt={"Brand Logo"} /> 
                            <span>WEATHER</span>
                        </a>
                        <form className="d-flex search_form">
                            <input className="form-control"
                                type="search"
                                placeholder="Search a City..."
                                aria-label="Search"
                                value={searchInput}
                                onChange={(event) => {
                                    setSearchInput(event.target.value);
                                }}
                            />
                            <input className="btn px-4"
                                type="submit"
                                value="Search"
                                onClick={(event) => {
                                    event.preventDefault();
                                    setLocation(searchInput);
                                    setSearchInput('');
                                }}
                            />
                        </form>
                    </div>
                </nav>

                <div className="main-container">
                    {/* Current Weather */}
                    <Current />
                </div>
            </LocationValue.Provider>
        </>
    );
}

export default SearchBar;
export { LocationValue };