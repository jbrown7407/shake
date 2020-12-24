import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState } from 'react';


import RandomUser from './Components/RandomUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RandomUser />
      </header>
    </div>
  );
}

export default App;