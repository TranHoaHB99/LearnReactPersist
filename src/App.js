import React, { Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import SpinnerCommon from './components/Spinner';
import Login from './features/Auth/pages/Login';

import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
//Lazy load
const Post = React.lazy(() => import('./features/Post'));

function App() {
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) {
          //logout
          history.push('/login');
          return;
        }
        console.log('logged in user');
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  return (
    <div className='absolute'>
      <Suspense fallback={<SpinnerCommon />}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/posts' />
            <Route path='/posts' component={Post} />
            <Route path='/login' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
