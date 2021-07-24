import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AllComponents from "./components/AllComponents"

ReactDOM.render(
    <>
    <App/>
    <div className="home-section">
    <AllComponents />
    </div>
    </>
    ,document.getElementById('root'));

