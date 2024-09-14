import RecipeItem from './RecipeItems.js';
import './styles/RecipeList.css';  
import React, { useState, useEffect } from 'react';
import { getFromFlask } from './api.js';
import image from './images/test.png';

function RecipeList() {
    const [data, setData] = useState(null);
    const [message, setMessage] = useState('');
    const [dataString, setDataString] = useState('');  // New state for form input
    const [imageString, setImageString] = useState('');  // New state for form input

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
        fetch('http://127.0.0.1:5000/recipe')
            .then(response => response.json())
            .then(data => setData(data));
            
    }, []);


    
    return (
        <div className="RecipeList">
            {/* {data.map(item => (<RecipeItem title = {dataString} imgurl = {imageString}/>))}
            <RecipeItem title = "title" imgurl={image}></RecipeItem> */}
            {JSON.stringify(data)}
        </div>
    );
}

export default RecipeList;