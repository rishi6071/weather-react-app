import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './components/SearchBar';
import Current from './components/Current';
import Today from './components/Today';
import NextDays from './components/NextDays';

const App = () => {

  return (
    <>
      {/* Search Bar */}
      <SearchBar />

      <main className="main-container">

        {/* Current Weather */}
        {/* <Current /> */}

        {/* Today's Weather */}
        {/* <Today /> */}

        {/* Next 5 Days Weather */}
        {/* <NextDays /> */}

      </main>
    </>
  );
}

export default App;