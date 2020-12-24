import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState } from 'react';
import ReactDOM from "react-dom";

import RandomUser from './Components/RandomUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomUser />
        {/* <RandomUser />
        <button value="Reload Page" onClick="refresh"> Next </button> */}
        <button><a href="/"></a></button>
      </header>
    </div>
  );
}

export default App;