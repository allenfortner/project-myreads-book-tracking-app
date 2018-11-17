import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchPage extends Component {
	state = {
		query: '',
		results: []
	}
	
	updateQuery = (newQuery) => {
		//When the user types in the search field, the query state will be updated
		this.setState({query: newQuery});
		console.log(newQuery);
		//Then search the API for the new query
		this.searchQuery(newQuery)
	}
	
	searchQuery = (query) => {
		BooksAPI.search(query.trim()).then(response => {
			if ((response === undefined) || (response.error === "empty query")) {
				//If the response comes back undefined or with an error, clear the results state and return
				this.setState({results: []})
				return;
			} else {
				//Otherwise, set the results state to the contents of the response
				this.setState({results: response});
				console.log(response);
			}
		});
	}
	
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
							NOTES: The search from BooksAPI is limited to a particular set of search terms.
							You can find these search terms here:
							https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

							However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
							you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)}/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
					{/*Map each book in the response state*/}
						{this.state.results.map(book => {
							
							//Kind of messy, but the following code is used to display the correct shelf for each book on the search page
							let correctShelf;
							let filterShelf = (this.props.books.filter(findBook => findBook.id === book.id));
							
							//filterShelf goes through the current list of books and filters out the book being mapped (if applicable)
							
							if (filterShelf.length === 0) {
								//If the book being mapped is not on any of the shelves, set the correctShelf to none and create the component
								correctShelf = "none";
							} else {
								//Otherwise, display the correct shelf that the book is already on
								correctShelf = filterShelf[0].shelf;
							}
							
							console.log(filterShelf);
							
							return (<Book 
									book={book}
									title={book.title} 
									authors={book.authors} 
									key={book.id} 
									shelf={correctShelf}
									image={(book.imageLinks && `url(${book.imageLinks.thumbnail})`)} 
									changeShelf={this.props.changeShelf}
							/>);
						})}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage;

