import { useContext } from 'react';
import FavouritesContext from '../context/favourite-context';
import MeetupList from '../components/meetups/MeetupList';

function Favourites() {
  const favCtx = useContext(FavouritesContext);
  console.log(favCtx.favourites);
  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetups={favCtx.favourites} />
    </section>
  );
}

export default Favourites;
