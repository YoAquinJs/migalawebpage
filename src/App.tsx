import React from 'react';
import './Style/App.scss';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Header from './Container/Header';
import Body from './Container/Body';

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="header-container">
                    <Header />
                </div>
                <div className="body-container">
                    <Body />
                </div>
            </div>
        </Router>
    );
}
