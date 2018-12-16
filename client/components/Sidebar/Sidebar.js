import React, { Component } from 'react'
import Jamlist from './Jamlist';
import Notes from './Notes'

class Sidebar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayJL: true,
			// jamList: [{ 'id': 1, 'name': "Jam 1", 'duration': '2:00' }, { 'id': 2, 'name': "Jam 2", 'duration': '2:00' }, { 'id': 3, 'name': "Jam 3", 'duration': '2:00' }],
			notes: [
				{ 'id': 1, 'title': "Note 1", 'text': 'Jammer gets out on turn 1' },
				{ 'id': 2, 'title': "Note 2", 'text': 'Blocker 1 knocks jammer out on inside line' },
				{ 'id': 3, 'title': "Note 3", 'text': 'Blocker 3 catches blocker chest to chest' }
			]
		}
	}


	render() {
		return (
			<div id='side-menu' className="d-flex flex-column ps-color-bg-gray-04">
				<ul className="tabs side-menu-tab-buttons">
					<li id="button-jam-list-wrapper"
						className={(this.state.displayJL) ? "selected" : "null"}>
						<button id="button-jam-list" className="side-menu-tab-button"
							onClick={() => this.setState({ displayJL: true })}>
							Jam List
						</button>
					</li>
					<li id="button-notes-wrapper" className={!this.state.displayJL ? "selected" : "null"}>
						<button id="button-notes" className="side-menu-tab-button"
							onClick={() => this.setState({ displayJL: false })}>
							Notes
						</button>
					</li>
				</ul>
				<div>
					{!this.state.displayJL
						? <Notes notes={this.state.notes} />
						: <Jamlist jamList={this.props.jamList} />
					}
				</div>
			</div>
		)
	}
}

export default Sidebar;