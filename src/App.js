// import './App.css';
import { Route, Switch } from 'react-router-dom';
import AllMeetUps from './pages/AllMeetUps';
import NewMeetUp from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Layout>      
      <Switch>
        <Route path='/' exact >
          <AllMeetUps />
        </Route>
        <Route path='/NewMeetUp'>
          <NewMeetUp />
        </Route>
        <Route path='/Favorites'>
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
