import React,{ useState } from 'react';
import AddCategories from './components/AddCategories';

import './App.css';
import { RecipeGrid } from './components/RecipeGrid';

const App = () => {

  const [categories, setCategories] = useState(['featured']);

  return (
    <div className="App">
      <header className="head-wrap">
        <h2 className="sub-title">App de recetas</h2>
      </header>
        <AddCategories setCategories={ setCategories }/>
        {
          categories.map( recipe => 

            <RecipeGrid
              key={recipe}
              category={recipe}
            />

          )
        }
    </div>  
  );
}

export default App;
