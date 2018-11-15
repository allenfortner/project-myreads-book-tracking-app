import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

class MainPage extends Component {
	state = {}
	
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
						<div>
							{/*Each shelf filters through the books to display the right books on the correct shelves*/}
							<Bookshelf shelfName="Currently Reading" books={this.props.books.filter(book => book.shelf === "currentlyReading")}/>
							<Bookshelf shelfName="Want to Read" books={this.props.books.filter(book => book.shelf === "wantToRead")}/>
							<Bookshelf shelfName="Read" books={this.props.books.filter(book => book.shelf === "read")}/>
						</div>
					</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default MainPage;

