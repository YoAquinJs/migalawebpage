import React from 'react';
import '../Style/Header.scss'

const Header = () => (
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
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
)

export default Header;
