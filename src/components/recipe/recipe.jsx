import React from 'react';
import { RecipeItem } from './recipe-item';
import { useSelector } from 'react-redux';
import { Spinner } from '../UI/spinner';
import { CustomMessage } from '../UI/message';

export const Recipe = () => {
    const state = useSelector(state => state);

    const info = <CustomMessage type="info" text="List of recipes is empty" />;
    const fail = <CustomMessage type="error" text="Something went wrong. Please try again" />;

    const error = state.recipes.error ? fail : null;
    const loading = state.recipes.loading ? <Spinner /> : null;
    const empty = !state.recipes.recipes.length && !loading && !error ? info : null;
    const hasData = !(error || loading || empty);
    const list = hasData
        ? state.recipes.recipes.map((item, i) => <RecipeItem key={item.recipe.label + i} data={item} />)
        : null;

    return (
        <div className="recipe">
            <div className="container">
                <div className="recipe-table">
                    <div className="recipe-table-header">
                        <div className="recipe-table-header__img">Image</div>
                        <div className="recipe-table-header__title">Title</div>
                        <div className="recipe-table-header__source">Source</div>
                        <div className="recipe-table-header__energy">Energy</div>
                        <div className="recipe-table-header__nutrients">Nutrients</div>
                    </div>
                    <div className="recipe-table-body">
                        {error}
                        {loading}
                        {empty}
                        {list}
                    </div>
                </div>
            </div>
        </div>
    );
};
