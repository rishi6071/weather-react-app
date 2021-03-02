import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';

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