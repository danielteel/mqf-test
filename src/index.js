import React from 'react';
import ReactDOM from 'react-dom/client';
import Div100vh from 'react-div-100vh';

import App from './components/App';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Div100vh >
        <App/>
      </Div100vh>
    </React.StrictMode>
);