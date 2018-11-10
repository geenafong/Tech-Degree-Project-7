import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = ({match}) => (

    <nav className="main-nav">
        <ul>
          <li><NavLink to='/ocean'>Ocean</NavLink></li>
          <li><NavLink to='/river'>River</NavLink></li>
          <li><NavLink to='/lake'>Lake</NavLink></li>
        </ul>
     </nav>

);

export default Nav;  

