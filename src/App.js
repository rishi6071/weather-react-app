import React from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import Current from './components/Current';
import Today from './components/Today';
import Next5Days from './components/Next5Days';

const App = () => {

  return (
    <>
      <main className="main-container">

        {/* Current Weather */}
        <Current />

        {/* Today's Weather */}
        <Today />

        {/* Next 5 Days Weather */}
        <Next5Days />

      </main>
    </>
  );
}

export default App;