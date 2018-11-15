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
							<Bookshelf shelfName="Currently Reading"/>
							<Bookshelf shelfName="Want to Read"/>
							<Bookshelf shelfName="Read"/>
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

