import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetsUp() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-hub-ea3c5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        const meetups = [];
        for (const key in resp) {
          const meetup = {
            id: key,
            ...resp[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setData(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meet ups</h1>
      <div>
        <MeetupList meetups={data} />
      </div>
    </section>
  );
}

export default AllMeetsUp;
