import React, { Component } from 'react';
import './App.css';

import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import MainPage from './containers/MainPage';
import Layout from './hoc/Layout';
import Resume from './components/Profile/Resume/Resume';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/resume" exact component={Resume} />
        <Redirect to="/" />
      </Switch>
    );
    let mainPage = <Layout>{routes}</Layout>;
    if (this.props.location.pathname === '/resume') {
      mainPage = <div>{routes}</div>;
    }
    return <div className={'App'}>{mainPage}</div>;
  }
}

export default withRouter(App);
