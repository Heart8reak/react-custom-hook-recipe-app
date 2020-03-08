import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';


const App = () => {
  const APP_ID = '0d4e5e61'
  const APP_KEY = '770c1a0b696b729c46ea58990b25fb3e'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState('chicken')


  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      console.log(data.hits)
      setRecipes(data.hits)
    }

    getRecipes()
    console.log('Woooooooosh -> useEffect has been ran')

  }, [query])


  const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <br />
      <br />
      <form onSubmit={getSearch} className="search-form">
        <input
          className='search-bar'
          value={search}
          type='text'
          onChange={updateSearch}
          placeholder="Type in meal"
        />
        <button
          className="search-button"
          type='submit'>
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  )
}

export default App;
