import React from 'react';

const Failure = ({ onRetry }) => {
    return React.createElement('div', null,
        React.createElement('h2', null, 'Login failed'),
        React.createElement('button', { onClick: onRetry }, 'Try again'),

    );

};

export default Failure;

