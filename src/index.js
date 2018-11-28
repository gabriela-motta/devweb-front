import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import BooksPage from './components/Book/BooksPage';
import Author from './components/Author/Author';
import AuthorsPage from './components/Author/AuthorsPage';
import Navbar from './components/Navbar';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/books" exact={true} component={BooksPage} />
        <Route path="/book/:bookId" exact={true} component={Book} />
        <Route path="/author/:authorId" component={Author} />
        <Route path="/authors" exact={true} component={AuthorsPage} />
      </Switch>
    </div>
  </ BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
