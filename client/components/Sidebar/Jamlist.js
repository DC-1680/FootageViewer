import React from 'react';

const Jamlist = (props) => {
	const { jamList } = props
	return (
		<div>
			{!jamList
				? <h1>Loading</h1>
				: jamList.map(jam => <p key={jam.id}>Jam Number:{jam.id}, startTime: { jam.startTime }</p>
				)
			}
		</div>
				)
			}

			export default Jamlist;
