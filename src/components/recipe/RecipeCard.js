import React from 'react';

export const RecipeCard = (props) => {

    return (
        <div className="recipe-card">
            <div className="recipe-card__box">
                <h2 className="heading-tertiary">{props.title}</h2>
                <img src={props.img} alt={props.title} class="recipe-card__img"/>
            </div>
        </div>
    )

}

export default RecipeCard