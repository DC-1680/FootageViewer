import React from 'react'

const Jam = (props) => {
	const { jam } = props
	return (
		<div className="tabs">
			<p>{jam.id}</p>
			<p><img src='./icons/play.png' /></p>
		</div>
	)
}

export default Jam;