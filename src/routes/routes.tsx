import React, { FunctionComponent, ReactChildren, ReactNode } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
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
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/main" component={Main} />
      <Route exact path="/" component={Login} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
