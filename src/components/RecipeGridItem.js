import React from 'react'

export const RecipeGridItem = ({title, image, ingredients, label}) => {
    console.log(label)
    return (
            <div className="col-md-4">
                <div className="card h-100">
                    <img src={image}  className="card-img-top" alt="recipe-img"/>
                    <div className="card-body">
                        <h5 className="card-title text-info">{title}</h5>
                        {ingredients.map(ingredient => (
                            <p key={label} className="card-text">{ingredient}</p>
                        ))}
                    </div>
                </div>
            </div>
    )
}

