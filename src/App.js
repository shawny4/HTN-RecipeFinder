import React, { useState, useEffect } from 'react';

import RecipeList from './RecipeList.js';
import './styles/App.css';


function App() {
  
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch('http://127.0.0.1:5000/')
        .then(response => response.text())
        .then(data => console.log(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  return (
    <div className="App">
      <header className="content">
        <p>Hello World</p>
        <RecipeList></RecipeList>
      </header>
    </div>
  );
}

export default App;
