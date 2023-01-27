import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
	// const imageUrl = './images/book-1.jpg';
	// const title = 'It Ends with Us: A Novel';
	// const author = 'Colleen Hoover';

	const firstBook = {
		imageUrl: './images/book-1.jpg',
		title: 'It Ends with Us: A Novel',
		author: 'Colleen Hoover',
	};

	const secondBook = {
		imageUrl: './images/book-2.jpg',
		title: 'Spare',
		author: 'Prince Harry The Duke of Sussex',
	};

	const books = [firstBook, secondBook];

	return (
		<section className="book-list">
			{books.map((book) => {
				return (
					<Book
						key={book.title}
						{...book}
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
	);
};

const Book = ({ imageUrl, title, author, children }) => {
	//	const { imageUrl, title, author } = props.book;
	//	const { children } = props;
	return (
		<section className="book">
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{/* {children} */}
			<EventExample />
		</section>
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

const EventExample = () => {
	const handleButtonClick = () => {
		alert('Hello There');
	};
	return (
		<section>
			<button onClick={handleButtonClick}>Click me</button>
		</section>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
