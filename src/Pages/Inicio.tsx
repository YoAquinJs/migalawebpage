import React from 'react';
import Header from "../Container/Header";
import Videos from '../Container/Videos'
function Inicio() {
    return(
        <div>
            <Header active={"inicio"} />
            <Videos />
        </div>
    );
}
export default Inicio;
