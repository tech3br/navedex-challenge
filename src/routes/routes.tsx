import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
