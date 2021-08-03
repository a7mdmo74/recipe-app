import React from 'react';
import './Resipes.css';

function Recipes({title, calories, image, ingredients}) {
    return (
        <div className="resipes">
            <img src={image} alt="chicken" className="img" />
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <ul>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes