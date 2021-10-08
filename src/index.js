import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log(process.env.SPACE_ID);
ReactDOM.render(<App />, document.getElementById('App'));