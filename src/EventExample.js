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

export default EventExample;
