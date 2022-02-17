import decorator from './NewMeetupForm.module.css';
import Card from '../../UI/Card';
import { useRef } from 'react';
function NewMeetupForm(props) {
  const inputTitle = useRef();
  const inputImage = useRef();
  const inputAddress = useRef();
  const inputDescription = useRef();

  function sumbmitHandler(event) {
    event.preventDefault();

    const summitedTitle = inputTitle.current.value;
    const summitedImage = inputImage.current.value;
    const summitedAddress = inputAddress.current.value;
    const summitedDescription = inputDescription.current.value;

    const meetupData = {
      title: summitedTitle,
      image: summitedImage,
      address: summitedAddress,
      description: summitedDescription,
    };

    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form action='' className={decorator.form} onSubmit={sumbmitHandler}>
        <div className={decorator.control}>
          <label htmlFor='title'> Meetup Title </label>
          <input type='text' required id='title' ref={inputTitle} />
        </div>

        <div className={decorator.control}>
          <label htmlFor='image'> Meetup Image </label>
          <input type='url' required id='image' ref={inputImage} />
        </div>

        <div className={decorator.control}>
          <label htmlFor='address'> Address </label>
          <input type='text' required id='address' ref={inputAddress} />
        </div>

        <div className={decorator.control}>
          <label htmlFor='description'> Description </label>
          <textarea rows='8' required id='description' ref={inputDescription} />
        </div>

        <div className={decorator.actions}>
          <button type='submit'>Add MeetUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
