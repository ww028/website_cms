// import React from 'react';
import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import MyHeader from '../components/MyHeader';
import AsideBar from '../components/AsideBar';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import RouterConfig from './routerConfig'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <MyHeader />
            <div className='page_main'>
              <AsideBar />
              <div className='page_content'>
                <Route render={({ location }) => {
                  console.log(location)
                  return (
                    <TransitionGroup>
                      <CSSTransition
                        key={location.key}
                        classNames='fade'
                        timeout={300}
                      >
                        <RouterConfig></RouterConfig>
                      </CSSTransition>
                    </TransitionGroup>
                  )
                }}>
                </Route>
              </div>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App;
