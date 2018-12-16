import React, { Component } from 'react';
import Player from './Player';

class PlayerContainer extends Component {
	constructor() {
		super();
		this.state = {
			'Jams': {},
			'JamNumber': 1

		}
		this.startJamClick = this.startJamClick.bind();
	}
	startJamClick = (e) => {
		console.log(e)
	}
	render() {

		return (
			<div>
				<Player startJamClick={this.startJamClick} />
				<button>Start Jam {this.state.JamNumber}</button>
			</div>
		)

	}
}

export default PlayerContainer;