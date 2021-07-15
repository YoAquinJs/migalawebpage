import React from 'react';
import '../Style/Navbar.scss'

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
                    <a className="smoothScroll" href="#">
                        INICIO
                    </a>
                </li>

                <li className={props.active == "tao" ? "current" : undefined}>
                    <a className="smoothScroll" href="#">
                        TAO
                    </a>
                </li>

                <li className={props.active == "demös" ? "current" : undefined}>
                    <a className="smoothScroll" href="#">
                        DEMOS
                    </a>
                </li>

                <li className={props.active == "partido" ? "current" : undefined}>
                    <a className="smoothScroll" href="#">
                        PARTIDO
                    </a>
                </li>

                <li className={props.active == "love" ? "current" : undefined}>
                    <a className="smoothScroll" href="#">
                        LOVE
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
