import React from 'react';
import Header from './Header';
import Videos from '../Container/Videos'
import '../Style/App.scss';

const Home = () => (
    <div className="app-container">
        <div className="header-container">
            <Header />
        </div>
        <div className="body-container">
            <Videos />
        </div>
    </div>
)

export default Home;
