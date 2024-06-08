import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the App component into the root element
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById('root')
);
