import React from 'react';

const Notes = (props) => {
	const { notes } = props
	return (
		<div>
			{!notes
				? <h1>Loading</h1>
				: notes.map(jam => <p key={jam.id}>{jam.title}: {jam.text}</p>
				)
			}
		</div>
	)
}

export default Notes;
