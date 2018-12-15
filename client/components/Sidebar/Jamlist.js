import React from 'react';

const Jamlist = (props) => {
	const { jamList } = props
	return (
		<div>
			{!jamList
				? <h1>Loading</h1>
				: jamList.map(jam => <p key={jam.id}>{jam.name}: {jam.duration}</p>
				)
			}
		</div>
	)
}

export default Jamlist;
