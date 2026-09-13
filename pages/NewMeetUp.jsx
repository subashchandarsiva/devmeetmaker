import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetUps() {
  const history = useHistory();
  function addMeetupHandler(data) {
    const url =
      'https://react-hub-ea3c5-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('got a network error');
        }
        return res.json();
      })
      .then(() => {
        history.replace('/all-meetsup');
      })
      .catch((error) => {
        console.error('Error occurred:', error);
      });
  }

  return (
    <div>
      <h1>Add new meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetUps;
