import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainMenuItem, MainMenu } from './components/MainMenu/MainMenu';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ContactPage from './components/ContactPage/ContactPage';
import CategoryPage from './components/CategoryPage/CategoryPage';

const menuItems: MainMenuItem[] = [
  new MainMenuItem("Početna", "/"),
  new MainMenuItem("Category 1", "/category/1/"),
  new MainMenuItem("Category 22", "/category/22/"),
  new MainMenuItem("Category 31", "/category/31/"),
  new MainMenuItem("Category 4", "/category/4/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("Prijava", "/user/login/"),
];

ReactDOM.render(
  <React.StrictMode>
    <MainMenu items={menuItems} />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/user/login" component={HomePage} />
        <Route path="/category/:cId" component={CategoryPage} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
