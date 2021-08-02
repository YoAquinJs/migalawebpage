import React from 'react';
import Header from './Header';
import Videos from '../Container/Videos'
import '../Style/App.scss';

const Home = () => {
    const root = document.getElementById('root');
    const body = document.body;
    body.classList.remove('white-bg')
    root.classList.remove('white-bg');
    return (
        <>
            <div className="header-container">
                <Header />
            </div>
            <div className="body-container">
                <Videos />
            </div>
        </>
    )
};

export default Home;
