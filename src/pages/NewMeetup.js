import MeetupItem from "../components/Layout/meetup/MeetupItem";
import NewMeetupForm from "../components/Layout/meetup/NewMeetupForm";
import { useHistory } from 'react-router-dom'

function NewMeetUp() {
    const history = useHistory();
    
    async function addMeetupHandler(meetupData){
        await fetch(
            'https://react-001-c6849-default-rtdb.firebaseio.com/meetups.json',
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                header : {'Content-Type' : 'application/json'}
            }
        )
        history.replace('/');
    }
    return (
      <section>
        <h1>New MeetUp Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    );

}

export default NewMeetUp;
