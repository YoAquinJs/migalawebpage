import React from 'react';
import '../Style/Navbar.scss'
import Navbar from "../Components/Navbar";

function Header(props: any) {
    return(
        <div>
            <Navbar active={props.active}/>
        </div>
    )
}
export default Header;
