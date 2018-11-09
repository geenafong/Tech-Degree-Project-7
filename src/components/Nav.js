import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (

    <nav className="main-nav">
        <ul>
          <li><Link to='/ocean'>Ocean</Link></li>
          <li><Link to='/river'>River</Link></li>
          <li><Link to='/lake'>Lake</Link></li>
        </ul>
     </nav>

);

export default Nav;  