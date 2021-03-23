import React from 'react';
import { Link } from "react-router-dom";



function Navbar()
{

    return(
<nav class="mynavbar navbar navbar-expand">
    <Link class="mytitle navbar-brand" to="/">Razor Softwork</Link>
    <div class="navbar-collapse collapse">
        <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="mytitle nav-link" to="/">Inicio</Link>
            </li>
        </ul>
    </div>
</nav>
    );
}
export default Navbar;