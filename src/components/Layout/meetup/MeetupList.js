import meetupList from './MeetupList.module.css'
import MeetupItem from './MeetupItem';
function MeetupList(props) {

    return (
        <ul className = {meetupList.list}>
            {
                props.meetup.map((x) => 
                    <MeetupItem 
                        key = {x.id} 
                        id = {x.id} 
                        image = {x.image}
                        title = {x.title}
                        description = {x.description}
                        address = {x.address}
                    />)
            }
        </ul>
    );
}

export default MeetupList;