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
	
	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(response => {
			//Filter out the old shelf version of the updated book if applicable and add the new book to the books state
			book.shelf = shelf;
			this.setState(state=>({books: state.books.filter(eachBook => eachBook.id !== book.id).concat(book)}));
			console.log(this.state.books);
		});
	}
	
	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => (
					<MainPage books={this.state.books} changeShelf={this.changeShelf}/>
				)}/>
				<Route exact path="/search" render={() => (
					<SearchPage />
				)}/>
			</div>
		)
	}
}

export default BooksApp;
