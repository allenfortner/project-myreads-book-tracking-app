import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
  state = {}

  render() {
    return (
	<div className="app">
		<Route exact path="/" render={() => (
			<MainPage />
		)}/>
		<Route exact path="/search" render={() => (
			<SearchPage />
		)}/>
	</div>
    )
  }
}

export default BooksApp;
