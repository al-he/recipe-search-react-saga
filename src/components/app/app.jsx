import React from 'react';
import { Divider } from 'antd';
import Header from '../header';
import Sidebar from '../sidebar';
import Recipe from '../recipe';
import { Pag } from '../pag/pag';

export const App = () => {
    return (
        <>
            <Header />
            <Divider />
            <Sidebar />
            <Divider />
            <Recipe />
            <Divider />
            <Pag />
        </>
    );
};
