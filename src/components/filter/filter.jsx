import React from 'react';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
import { clickFilter } from '../../store/actions/filters';

export const Filter = ({ data }) => {
    const dispatch = useDispatch();
    const filterHandler = val => {
        dispatch(clickFilter(val));
    };

    return (
        <>
            <Checkbox.Group onChange={filterHandler}>
                {data.map(item => {
                    return (
                        <Checkbox value={`&health=${item.parameter}`} key={item.parameter}>
                            {item.label} <span className="span-tip">{item.definition}</span>
                        </Checkbox>
                    );
                })}
            </Checkbox.Group>
        </>
    );
};
