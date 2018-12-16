import React from 'react';
import Jam from './Jam'

const Jamlist = (props) => {
	const { jamList } = props
	return (
		<div>
			{!jamList
				? <h1>Loading</h1>
				: jamList.map(jam => <Jam jam={jam} />
				)
			}
		</div>
	)
}

export default Jamlist;
