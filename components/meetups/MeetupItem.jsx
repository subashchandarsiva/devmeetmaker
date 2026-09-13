import Card from '../../ui/card/Card';
import classes from './MeetupItem.module.css';
import { useContext } from 'react';
import FavouritesContext from '../../context/favourite-context';

function MeetupItem({ id, image, title, address, description }) {
  const favCtx = useContext(FavouritesContext);

  const itemIsFavourite = favCtx.itemIsFavourite(id);

  function toggleFavStatusHandler() {
    if (itemIsFavourite) {
      favCtx.removeFavourite(id);
    } else {
      favCtx.addFavourite({
        id,
        title,
        description,
        address,
        image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFavourite
              ? 'Remove from Favourites'
              : '⭐️Add to favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
