import React, { Component } from 'react';
import { Home } from './components'

class Routes extends Component {

	render() {

		return (
			<Switch>
				{/* Routes placed here are available to all visitors */}

				{/* Routes placed here are only available after logging in */}


				{/* Displays home component as a fallback */}
				<Route component={Home} />
			</Switch>
		)
	}

}