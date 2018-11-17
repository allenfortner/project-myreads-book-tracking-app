import React, { Component } from 'react';

class Book extends Component {
	state = {}
	
	render() {
		const currentShelf = this.props.shelf || "none";
		
		//If there are multiple authors, combine each author's name into a single string separated by commas
		const authors = this.props.authors && this.props.authors.join(', ');
		
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.image}}></div>
						<div className="book-shelf-changer">
							<select value={currentShelf} onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{this.props.title}</div>
					<div className="book-authors">{authors}</div>
				</div>
			</li>
		)
	}
}

export default Book;
