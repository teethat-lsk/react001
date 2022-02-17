import Card from '../../UI/Card';
import decorator from './MeetupItem.module.css';
import { useContext } from 'react';
import FavoritesContext  from '../../../Store/favorites-context';

function MeetupItem(props) {
  const favoritesContx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContx.removeFavorite(props.id);
    }
    else{
      favoritesContx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <Card>
      <li className={decorator.item}>
        <div className={decorator.image}>
          <img src={props.image} alt='' />
        </div>

        <div className={decorator.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={decorator.actions}>
          <button onClick = {toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorite':'Add to Favorite'}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
