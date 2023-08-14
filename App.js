import './App.css';
import Todos from './components/Todo/Todos';
import { Route, Switch } from 'react-router-dom';
import AllMeetsUp from './pages/AllMeetsUp';
import Favourite from './pages/Favourite';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './components/layout/Layout';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { isAddEventDisabled } = useFlags();
  console.log(isAddEventDisabled);
  return (
    <Layout>
      <Switch>
        <Route path='/all-meetsup'>
          <AllMeetsUp />
        </Route>
        <Route path='/favourite'>
          <Favourite />
        </Route>
        {!isAddEventDisabled ? (
          <Route path='/new-meetup'>
            <NewMeetUp />
          </Route>
        ) : null}
        <Route path='/' exact>
          <h1>My Todos</h1>
          <Todos title='Reading' />
          <Todos title='Cleaning' />
        </Route>
      </Switch>
    </Layout>
  );
}

export default withLDProvider({
  clientSideID: '',
  options: {
    bootstrap: 'localStorage',
  },
})(App);

// export default App;
