import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';

function Post(props) {
    const match = useRouteMatch();  
    return (
      <Switch>
        <Route exact path={match.url} component={MainPage} />

        <Route path={`${match.url}/add`} component={AddEditPage} />
        <Route path={`${match.url}/:productId`} component={AddEditPage} />
  
        <Route component={NotFound} />
      </Switch>
    );
  }
  
  export default Post;