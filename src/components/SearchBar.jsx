import React from 'react';

const SearchBar = () => {

    return (
        <>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">WEATHER</a>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search any Location..." aria-label="Search" />
                        <button className="btn btn-info px-4" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default SearchBar;