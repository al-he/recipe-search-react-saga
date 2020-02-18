import React, { useState } from 'react';
import { Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../store/actions/search';

export const Header = () => {
    const [query, setQuery] = useState('');
    const { filters } = useSelector(state => state.filters);
    const dispatch = useDispatch();

    const search = e => {
        e.preventDefault();
        localStorage.setItem('query', query.trim());
        dispatch(getRecipes(query, filters.length ? filters.join('') : '', [0, 20]));
    };

    return (
        <div className="header">
            <div className="container">
                <form className="header__form" onSubmit={search}>
                    <input
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="start searching"
                    />
                    <button type={'submit'}>
                        <Icon type="search" />
                    </button>
                </form>
            </div>
        </div>
    );
};
