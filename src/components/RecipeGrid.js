import React from 'react'
import { useFetchRecipe } from '../hooks/useFetchRecipes'
import { RecipeGridItem } from './RecipeGridItem';

export const RecipeGrid = ( {category} ) => {

    const {data, loading} = useFetchRecipe( category );

    return (
        <div className="container">
            <h2 className="text-center text-info">Recetas destacadas</h2>

            {loading && <p>Cargando...</p>}

            <div className="recipe-card row row-cols-1 row-cols-md-2 g-4">
                {
                    data.map( recipe => (
                        <RecipeGridItem
                            key={recipe.label}
                            {...recipe} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
