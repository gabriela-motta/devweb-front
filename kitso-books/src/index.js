import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Book from './components/Book';
import Author from './components/Author';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <div>
    <Navbar/>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Book} />
        <Route path="/author" component={Author} />
        </Switch>
    </ BrowserRouter>
  </div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
