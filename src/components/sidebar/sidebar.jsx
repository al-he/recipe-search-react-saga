import React from 'react';
import { Collapse } from 'antd';

import Filter from '../filter';
import { data } from '../../assets/data/filters';

const { Panel } = Collapse;

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <Collapse>
                    <Panel header="Health labels" key="1">
                        <Filter data={data.health} />
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};
