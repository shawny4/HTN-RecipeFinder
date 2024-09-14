import React, { useState, useEffect } from 'react';

import RecipeList from './RecipeList.js';
import Header from './Header.js';

import './styles/App.css';
import { getFromFlask } from './api.js';

function App() {
  const [data, setData] = useState(null);
  const [message, setMessage] = useState('');
  const [inputData, setInputData] = useState('');  // New state for form input

  // useEffect(() => {
  //   getFromFlask().then(responseData => setData(responseData))
  //   .catch(error => setMessage('Error fetching data from Flask: ' + error));
  // }, []);
  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const responseData = await getFromFlask();  // Call the API
    //     setDataString(JSON.stringify(responseData[0]).replace(/"/g, ''));  // Store the stringified data in the state
    //     setImageString(JSON.stringify(responseData[2]).replace(/"/g, ''));  // Store the stringified data in the state
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //     setDataString('Error fetching data');  // Handle error case by setting an error message
    //   }
    // }

//fetchData();  // Call the function to fetch data


// GET request using fetch inside useEffect React hook
fetch('http://127.0.0.1:5000/')
    .then(response => response.text())
    .then(data => setData(data));
    
}, []);

  return (
    <div className="App">
      <Header></Header>
      <header className="content-app">
        <p>hello world</p>
        {/* <RecipeList></RecipeList> */}
        {data}
      </header>
    </div>
  );
}

export default App;
