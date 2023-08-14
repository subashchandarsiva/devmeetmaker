import Card from '../../ui/card/Card';
import { useRef } from 'react';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const newMeetupData = {
      title: titleInputRef.current.value,
      iamge: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    onAddMeetup(newMeetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea
            rows='5'
            required
            id='description'
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
