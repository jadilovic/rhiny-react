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

	const someValue = 'Some Value';

	const displayValue = () => {
		console.log(someValue);
	};

	const getBook = (title) => {
		const book = books.find((book) => book.title === title);
		console.log(book);
	};

	return (
		<section className="book-list">
			{books.map((book) => {
				return (
					<Book
						key={book.title}
						{...book}
						displayValue={displayValue}
						getBook={getBook}
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

const Book = ({ imageUrl, title, author, children, displayValue, getBook }) => {
	//	const { imageUrl, title, author } = props.book;
	//	const { children } = props;
	return (
		<section className="book">
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{/* {children} */}
			<EventExample title={title} />
			<button onClick={displayValue}>Display Value</button>
			<div>
				<button onClick={() => getBook(title)}>Get Book</button>
			</div>
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

const EventExample = ({ title }) => {
	console.log(title);
	const handleButtonClick = () => {
		alert('Hello There');
	};
	const handleFormInput = (e) => {
		console.log(e);
		console.log(e.target);
		console.log(e.target.name, e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitted', e);
	};
	return (
		<section>
			<h1>Change Event</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="test">Typical Form</label>
				<input
					onChange={handleFormInput}
					type="text"
					name="test"
					id="test"
					style={{ margin: '1rem 0' }}
				/>
				<button type="submit">Enter</button>
			</form>
			<form onSubmit={handleSubmit}>
				<input onChange={handleFormInput} type="text" name="name" id="name" />
				<button type="submit">Submit</button>
			</form>
			<h1>Button Event</h1>
			<button onClick={handleButtonClick}>Click me</button>
			<p>Anonymous Function</p>
			<button onClick={() => console.log(`Fire Started ${title}`)}>
				Fire it
			</button>
		</section>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
