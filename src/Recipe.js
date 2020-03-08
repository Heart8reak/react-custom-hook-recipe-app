import React from 'react'
import styles from "./myRecipe.module.css"


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={styles.recipe}>
            <h1 className={styles.recipe}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe