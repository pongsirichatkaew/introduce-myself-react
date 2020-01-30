import React, { Component } from 'react';
import './App.css';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import MainPage from './containers/MainPage';
import Layout from './hoc/Layout';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <div className={'App'}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default withRouter(App);
