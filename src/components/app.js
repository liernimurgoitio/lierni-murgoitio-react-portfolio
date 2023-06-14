import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioManager from './pages/portfolio-manager';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Lierni Murgoitio Portfolio</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>   
      </div>
    );
  }
}
