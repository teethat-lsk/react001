import { Link } from 'react-router-dom';
import navBar from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../Store/favorites-context';

function MainNavigation() {
  const favoritesContx = useContext(FavoritesContext);
  return (
    <header className={navBar.header}>
      <div className={navBar.logo}>MeetUps</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All MeetUps Page</Link>
            </li>
            <li>
              <Link to='/NewMeetUp'>NewMeetUp Page</Link>
            </li>
            <li>
              <Link to='/Favorites'>
                Favorites Page
                <span className={navBar.badge}>
                  {favoritesContx.totalFavorites}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
