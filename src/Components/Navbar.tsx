import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../Style/Navbar.scss'
import { FaInstagram, FaPatreon, FaTwitter } from "react-icons/all";
import { IconType } from 'react-icons';

const paths: { name: string, path: string }[] = [
    {
        name: 'inicio',
        path: '/',
    },
    {
        name: 'tao',
        path: '/tao',
    },
    {
        name: 'demös',
        path: '/demös',
    },
    {
        name: 'partido',
        path: '/partido',
    },
    {
        name: 'love',
        path: '/love',
    },
];

const socialNetworks: { Icon: IconType, url: string }[] = [
    {
        Icon: FaInstagram,
        url: '',
    },
    {
        Icon: FaTwitter,
        url: '',
    },
    {
        Icon: FaPatreon,
        url: '',
    },
];

function Navbar() {
    const location = useLocation();

    const isRouteActive = (path: string): boolean => {
        const { pathname: activePath } = location;
        return activePath === path;
    }

    return (
        <nav id="nav-wrap">
            {/* <a className="mobile-btn" href="nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
            </a> */}

            <ul id="nav" className="nav">
                {
                    paths.map(({ path, name }) => (
                        <li key={name} className={isRouteActive(path) ? 'current' : ''}>
                            <Link to={path}>{name.toUpperCase()}</Link>
                        </li>
                    ))
                }
                {
                    socialNetworks.map(({ url, Icon }, index) => (
                        <li key={index}>
                            <a target="_blank" href={url}>
                                <Icon size="20px" />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
export default Navbar;
