import React from 'react';

export const RecipeItem = ({ data }) => {
    const { recipe } = data;
    return (
        <div className="recipe-table-body-row">
            <div className="recipe-table-body-row__img">
                <img src={recipe.image} alt="dish" />
            </div>
            <div className="recipe-table-body-row__title">{recipe.label}</div>
            <div className="recipe-table-header__source">
                <a href={recipe.url} rel="noopener noreferrer" target="_blank">
                    {recipe.source}
                </a>
            </div>
            <div className="recipe-table-body-row__energy">{recipe.calories.toFixed(2)} kcal</div>
            <div className="recipe-table-body-row__nutrients">
                <div className="row">
                    <p>Protein</p>
                    <p>{_total(recipe, 'PROCNT')} g</p>
                </div>
                <div className="row">
                    <p>Water</p>
                    <p>{_total(recipe, 'WATER')} g</p>
                </div>
                <div className="row">
                    <p>Fat</p>
                    <p>{_total(recipe, 'FAT')} g</p>
                </div>
                <div className="row">
                    <p>Sodium</p>
                    <p>{_total(recipe, 'NA')} mg</p>
                </div>
                <div className="row">
                    <p>Calcium</p>
                    <p>{_total(recipe, 'CA')} mg</p>
                </div>
            </div>
        </div>
    );
};

const _total = (data, field) => data.totalNutrients[field].quantity.toFixed(2);
