import MeetupList from '../components/Layout/meetup/MeetupList';
import { useState } from 'react';
import { useEffect } from 'react';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetUps() {
  const [isLoding, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://react-001-c6849-default-rtdb.firebaseio.com/meetups.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const temp = {
            id: key,
            ...data[key],
          };
          console.log(data);
          meetups.push(temp);
        }

        setIsLoading(false);
        setLoadedData(meetups);
      });
  }, []);

  if (isLoding) {
    return <h1>Loading ... </h1>;
  }
  return (
    <section>
      <h1>All MeetUps</h1>
      <MeetupList meetup={loadedData} />
    </section>
  );
}

export default AllMeetUps;
