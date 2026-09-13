import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/all-meetsup'>All Meets Up</Link>
          </li>
          <li>
            <Link to='/favourite'>Favourites</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meet Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
