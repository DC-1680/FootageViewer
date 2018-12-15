import React, { Component } from 'react'
import Jamlist from './Jamlist';
import Notes from './Notes'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = {
			displayJL: true,
			jamList: [{ 'id': 1, 'name': "Jam 1", 'duration': '2:00' }, { 'id': 2, 'name': "Jam 2", 'duration': '2:00' }, { 'id': 3, 'name': "Jam 3", 'duration': '2:00' }],
			notes: [
				{ 'id': 1, 'title': "Note 1", 'text': 'Jammer gets out on turn 1' },
				{ 'id': 2, 'title': "Note 2", 'text': 'Blocker 1 knocks jammer out on inside line' },
				{ 'id': 3, 'title': "Note 3", 'text': 'Blocker 3 catches blocker chest to chest' }
			]
		}
	}


	render() {
		return (
			<div id='sidebar-wrapper'>
				<div id='sh-wrapper'>
					<h1 onClick={() => this.setState({ displayJL: true })}
						className={
							!this.state.displayJL
								? 'toggle-item'
								: 'toggle-item active-toggle'
						}
					>
						Jam List
					</h1>
					<h1 onClick={() => this.setState({ displayJL: false })}
						className={
							this.state.displayJL
								? 'toggle-item'
								: 'toggle-item active-toggle'
						}>
						Notes
					</h1>
				</div>
				<div>
					{!this.state.displayJL
						? <Notes notes={this.state.notes} />
						: <Jamlist jamList={this.state.jamList} />
					}
				</div>
			</div>
		)
	}
}

export default Sidebar;