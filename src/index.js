import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
	// const imageUrl = './images/book-1.jpg';
	// const title = 'It Ends with Us: A Novel';
	// const author = 'Colleen Hoover';

	const someValue = 'Some Value';

	const displayValue = () => {
		console.log(someValue);
	};

	const getBook = (title) => {
		const book = books.find((book) => book.title === title);
		console.log(book);
	};

	return (
		<>
			<h1 className="title">Amazon Books</h1>
			<section className="book-list">
				{books.map((book, index) => {
					return (
						<Book
							key={book.title}
							{...book}
							displayValue={displayValue}
							getBook={getBook}
							number={index + 1}
							// imageUrl={book.imageUrl}
							// title={book.title}
							// author={book.author}
						>
							<h2>Children</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit
								beatae, nulla nobis debitis sint.
							</p>
						</Book>
					);
				})}
			</section>
		</>
	);
};

// const Image = () => (
// 	<img src="./images/book-1.jpg" alt="It Ends with Us: A Novel" />
// );
// const Title = () => {
// 	const title = 'It Ends with Us: A Novel';
// 	return <h2>{title}</h2>;
// };
// const Author = () => {
// 	const author = 'Colleen Hoover';
// 	const innerHeadingStyles = {
// 		color: 'blue',
// 		fontSize: '0.75rem',
// 		marginTop: '0.5rem',
// 	};
// 	return <h4 style={innerHeadingStyles}>{author}</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
