import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
	state = {
		books: []
	}
  
	componentDidMount = () => {
		//As soon as the component is mounted, get the list of books using getBooks
		this.getBooks();
	}
  
	getBooks = () => {
		//Get all of the books from BooksAPI and set the books state to the list we just received
		BooksAPI.getAll().then((newBooks) => {
			console.log(newBooks);
			this.setState({books: newBooks});
		});
	}
	
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
