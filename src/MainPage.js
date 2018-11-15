import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

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
							<Bookshelf />
							<Bookshelf />
							<Bookshelf />
						</div>
					</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
		)
	}
}

export default MainPage;

