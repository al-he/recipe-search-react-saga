import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../store/actions/search';

export const Pag = () => {
    const dispatch = useDispatch();
    const {
        recipes: { total },
        filters,
    } = useSelector(state => state);

    const onChange = value => {
        const offset = [(value - 1) * 20, value * 20];
        const query = localStorage.getItem('query');
        dispatch(getRecipes(query, filters.length ? filters.join('') : '', offset));
    };

    return (
        <>
            <div className="pagination">
                <div className="container">
                    <div className="pagination-body">
                        {total ? (
                            <Pagination total={total > 100 ? 100 : total} onChange={onChange} defaultPageSize={20} />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
