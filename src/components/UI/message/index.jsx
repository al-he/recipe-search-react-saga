import React from 'react';
import { Alert } from 'antd';

export const CustomMessage = ({ type = 'info', text = '' }) => (
    <div className="message-container">
        <Alert message={text} type={type} showIcon />
    </div>
);
