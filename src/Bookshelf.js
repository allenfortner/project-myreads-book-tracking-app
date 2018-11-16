import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
	state = {}
	
	render() {
		return (
			<div className="bookshelf">
			<h2 className="bookshelf-title">{this.props.shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{/*Map each book with title, authors, and thumbnail image properties as well as bring down changeShelf method*/}
						{this.props.books.map(book => (<Book 
							book={book}
							title={book.title} 
							authors={book.authors} 
							key={book.id} 
							image={(book.imageLinks && `url(${book.imageLinks.thumbnail})`)} 
							changeShelf={this.props.changeShelf}
						/>))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Bookshelf;

