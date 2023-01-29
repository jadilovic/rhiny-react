import EventExample from './EventExample.js';

const Book = ({
	imageUrl,
	title,
	author,
	children,
	displayValue,
	getBook,
	number,
}) => {
	//	const { imageUrl, title, author } = props.book;
	//	const { children } = props;
	return (
		<section className="book">
			<img src={imageUrl} alt={title} />
			<h1 className="number">{`#${number}`}</h1>
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

export default Book;
