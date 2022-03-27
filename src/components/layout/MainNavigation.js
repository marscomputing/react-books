import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return <nav className={classes.nav}>
    <ul>
      <li>
        <NavLink to='/'>All</NavLink>
      </li>
      <li>
        <NavLink to='/favorites'>Favorites</NavLink>
      </li>
    </ul>
  </nav>
}

export default MainNavigation;