import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.less';
//import About from './containers/About/About';
//import HomePage from './containers/HomePage/HomePage';
//import Portfolio from './containers/Portfolio/Portfolio';
import Layout from './hoc/Layout/Layout';
import axios from 'axios';
import Spinner from './components/UI/Spinner/Spinner';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const AsyncAbout = asyncComponent(() => {
  return import('./containers/About/About');
});

const AsyncHomePage = asyncComponent(() => {
  return import('./containers/HomePage/HomePage');
});
const AsyncPortfolio = asyncComponent(() => {
  return import('./containers/Portfolio/Portfolio');
});

class App extends Component {

  state = {
    techStack: null,
    loaded: true,
    error: false
  }

  componentDidMount () {
    axios.get('https://hub.deloitte.com/api/portfolio/7c8a9f5a9ca4585d2b716e31ad89210728e643c9d3a38a5eee364e0a3ed0d32f')
      .then(res => {
        this.setState({techStack: res.data.data.techStack});
      })
      .catch(err => {
        this.setState({error:true});
      })
  }

  render() {
    let routes = <Spinner />;
    if(this.state.techStack) {
      routes = (
        <Switch>
          <Route path = "/about" exact component={AsyncAbout} />
          <Route path = "/portfolio" exact component={AsyncPortfolio} />
          <Route path = "/" exact component={AsyncHomePage} />
        </Switch>
      );
    }else if(this.state.error) {
      routes = (
        <div>Please try again after some time.</div>
      )
    }
    return (
      <div className="App"> 
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
