import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routerMap from './routerMap'

class routerConfig extends Component {
  render() {
    const router_item = routerMap.map((item, index) => 
      <Route key={index} path={item.path} exact component={item.component}></Route>
    )
    return (
      <Switch>
        {
          router_item
        }
      </Switch>
    )
  }
}

export default routerConfig;