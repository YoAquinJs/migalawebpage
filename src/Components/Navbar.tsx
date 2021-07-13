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
                    <a className="smoothscroll" href="#">
                        INICIO
                    </a>
                </li>

                <li>
                    <a className="smoothscroll" href="#">
                        TAO
                    </a>
                </li>

                <li>
                    <a className="smoothscroll" href="#">
                        DEMOS
                    </a>
                </li>

                <li>
                    <a className="smoothscroll" href="#">
                        PARTIDO
                    </a>
                </li>

                <li>
                    <a className="smoothscroll" href="#">
                        LOVE
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
