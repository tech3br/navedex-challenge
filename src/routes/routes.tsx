import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Add from '../pages/Add';
import Edit from '../pages/Edit';
import { Authorization } from '../config/Autorization';

interface PrivateRouteProps extends RouteProps {
  component?: any;
  path?: string;
  exact?: boolean;
  children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, children, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        Authorization() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
};

const Routes = () => (
  <Switch>
    <PrivateRoute path="/main" component={Main} />
    <PrivateRoute path="/add" component={Add} />
    <PrivateRoute path="/edit/:id" component={Edit} />
    <Route exact path="/" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
