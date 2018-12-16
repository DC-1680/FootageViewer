import React from 'react';
import Note from './Note';

const Notes = (props) => {
	const { notes } = props
	return (
		<div id='noteslist' className='d-flex flex-column flex-align-center'>
			<div className='flex-grow-1'>
				{!notes
					? <h1>Loading</h1>
					: notes.map(note => <Note key={note.id} note={note} />
					)
				}
			</div>
			<div id='note-entry-box'>
				<input>
				</input>
			</div>
		</div>
	)
}

export default Notes;
