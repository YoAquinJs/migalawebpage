import React from 'react';
import Header from './Header';
import Body from './Body';
import '../Style/App.scss';

const Home = () => (
    <div className="app-container">
        <div className="header-container">
            <Header />
        </div>
        <div className="body-container">
            <Body />
        </div>
    </div>
)

export default Home;
