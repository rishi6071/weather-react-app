import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const Loader = () => {

    return (
        <>
            <div className="container my-4 d-flex justify-content-center">
                <div className="spinner-grow text-info mr-3" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-info mr-3" role="status">
                    <span className="visually-hidden"></span>
                </div>
                <div className="spinner-grow text-info mr-3" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        </>
    );
}

export default Loader;