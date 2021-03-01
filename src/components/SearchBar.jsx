import React, { useState } from 'react';

const SearchBar = () => {
    // Current SearchBar Input
    const [searchInput, setSearchInput] = useState("");

    // Current Submitted Location
    const [location, setLocation] = useState("Indore");
    localStorage.setItem('selectedLocation', location);

    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WEATHER</a>
                    <form className="d-flex">
                        <input className="form-control me-2"
                            type="search"
                            placeholder="Search any Location..."
                            aria-label="Search"
                            value={searchInput}
                            onChange={(event) => {
                                setSearchInput(event.target.value);
                            }}
                        />
                        <input className="btn btn-info px-4"
                            type="submit"
                            value="Search"
                            onClick={(event) => {
                                event.preventDefault();
                                setLocation(searchInput);
                                localStorage.setItem('selectedLocation', searchInput);
                                setSearchInput('');
                            }}
                        />
                    </form>
                </div>
            </nav>
        </>
    );
}

export default SearchBar;