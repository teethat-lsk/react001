import { useContext } from 'react';
import FavoritesContext from '../Store/favorites-context';
import MeetupList from '../components/Layout/meetup/MeetupList';

function Favorites() {
  const favoritesContx = useContext(FavoritesContext);

  let content;
  if (favoritesContx.totalFavorites === 0) {
    content = <p>No Favorites Yet.</p>
  } else {
    content = <MeetupList meetup={favoritesContx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
