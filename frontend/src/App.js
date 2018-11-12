import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login'
import Timeline from './pages/Timeline';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/timeline" component={Timeline}/>

     
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
