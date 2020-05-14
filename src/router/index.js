// import React from 'react';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store';
import MyHeader from '../components/MyHeader';
import Home from '../pages/home';
import Detail from '../pages/detail';
import Login from '../pages/login';

import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <MyHeader />
            <Route render={({ location }) => {
              console.log(location)
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames='fade'
                    timeout={300}
                  >
                    <Switch>
                      <Route path='/' exact component={Home}></Route>
                      <Route path='/login' exact component={Login}></Route>
                      <Route path='/detail' exact render={(props) => {
                        return <Detail {...props} name={'cedric'} />
                      }}></Route>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )
            }}>
            </Route>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
