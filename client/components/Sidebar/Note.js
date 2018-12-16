import React from 'react'

const Note = (props) => {
	const { note } = props
	return (
		<div className="tabs">
			<p>{note.title}</p>
			<div class='d-flex'>
				<p><img src='./icons/play.png' /></p>
				<p><img src='./icons/delete.png' />Delete</p>
				<p><img src='./icons/edit.png' />Edit</p>
			</div>
		</div>
	)
}

export default Note;