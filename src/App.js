import React, { useState, useEffect } from 'react';

import RecipeList from './RecipeList.js';
import Header from './Header.js';

import './styles/App.css';
import { getFromFlask } from './api.js';

function App() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const [inputData, setInputData] = useState('');  // New state for form input

  useEffect(() => {
    getFromFlask().then(responseData => setData(responseData))
    .catch(error => setMessage('Error fetching data from Flask: ' + error));
  }, []);
  
  return (
    <div className="App">
      <Header></Header>
      <header className="content-app">
        
        <RecipeList></RecipeList>
      </header>
    </div>
  );
}

export default App;
