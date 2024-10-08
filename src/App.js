import React, { useState, useEffect } from 'react';
import axios from 'axios'
import RecipeList from './RecipeList.js';
import './styles/App.css';
import Controls from './Controls.js';




function App() {
  const[searchQuery, setSearchQuery] = useState('');
  const[error, setError] = useState(null);
  const[data, setData] = useState(null);
  const[dropDownOption, setDropDownOption] = useState('');
  const[mealType, setMealType] = useState('');
  const[ecoScore, setEcoScore] = useState('');
  const[dishType, setDishType] = useState('');


  
  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userQuery = await axios.get('http://127.0.0.1:5000/recipe', {
        params: {
          q: searchQuery,
          health_filter: dropDownOption,
          mealType: mealType,
          dishType: dishType,
          co2EmissionsClass: ecoScore
        }});
      setData(userQuery.data);
    } catch (err) {
      console.error('Error searching', err);

    }
  }

  

  return (
    <div className="App">
       <header className="header">
        <div className="controls">
          {/* Search bar and controls will appear on the left side */}
          <Controls searchQuery = {searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}
                    dropDownOption = {dropDownOption} setDropDownOption={setDropDownOption}
                    mealType = {mealType} setMealType = {setMealType}
                    dishType = {dishType} setDishType = {setDishType}
                    ecoScore = {ecoScore} setEcoScore = {setEcoScore}></Controls>
        </div>
        
      
       <RecipeList recipes={data}></RecipeList>

      </header>
  
      </div>
  );
}
//array --> dictionary entires : array
export default App;
