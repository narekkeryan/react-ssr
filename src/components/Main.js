import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

class Main extends Component {
  render() {
    const mappedRoutes = routes.map(route => {
      const { component, ...rest } = route;
      const RouteComponent = component;
      return {
        ...rest,
        render: (props) => <RouteComponent {...props} />
      };
    });

    return (
      <div className="page">
        <Switch>
          {mappedRoutes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default Main;