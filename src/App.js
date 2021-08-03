import React, {useEffect, useState} from 'react';
import Recipes from './component/Recipes';
import './App.css';

function App() {

  const APP_ID = '6e5cb182';
  const APP_KEY = '3b46a76c16d9fccd3895848873e9a3c1';


  const [recipes, setResipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    setResipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
        type="text" 
        className="search-bar" 
        value={search} 
        onChange={updateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipes 
          key={recipe.recipe.image}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
