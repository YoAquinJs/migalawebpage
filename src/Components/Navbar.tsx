import React from 'react';
import {Link} from "react-router-dom";
import '../Style/Navbar.scss'
import {FaInstagram, FaPatreon, FaTwitter} from "react-icons/all";

function Navbar(props: any) {
    return(
        <nav id="nav-wrap">
            <a className="mobile-btn" href="nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
            </a>

            <ul id="nav" className="nav">
                <li className={props.active == "inicio" ? "current" : undefined}>
                    <Link to="/">INICIO</Link>
                </li>

                <li className={props.active == "tao" ? "current" : undefined}>
                    <Link to="/tao">TAO</Link>
                </li>

                <li className={props.active == "demös" ? "current" : undefined}>
                    <Link to="/demös">DEMÖS</Link>
                </li>

                <li className={props.active == "partido" ? "current" : undefined}>
                    <Link to="/partido">PARTIDO</Link>
                </li>

                <li className={props.active == "love" ? "current" : undefined}>
                    <Link to="/love">LOVE</Link>
                </li>
                <li>
                    <a href="">
                        <FaInstagram size="20px"/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaTwitter size="20px"/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaPatreon size="20px"/>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
