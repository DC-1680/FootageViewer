import React, { Component } from 'react';
import Sidebar from "./Sidebar/Sidebar"

class Player extends Component {
	constructor(props) {
		super(props);
		this.init();
		this.state = {
			'jamList': [],
			'jamNumber': 1
		}
		this.video = '49regWMPvQc' //video id

		window['onYouTubeIframeAPIReady'] = (e) => {
			this.YT = window['YT'];
			this.reframed = false;
			this.player = new window['YT'].Player('player', {
				videoId: this.video,
				events: {
					'startJamClick': this.startJamClick.bind(this),
					'onStateChange': this.onPlayerStateChange.bind(this),
					'onError': this.onPlayerError.bind(this),
					'onReady': (e) => {
						if (!this.reframed) {
							this.reframed = true;
							reframe(e.target.a);
						}
					}
				}
			});
		};
	}
	render() {
		const style = `.max-width-1024 { max-width: 1024px; margin: 0 auto; }`;
		return (
			<div id='main'>
				<div>
					<style>{style}</style>
					<div className="max-width-1024">
						<div className="embed-responsive embed-responsive-16by9" id="player">
						</div>
					</div>
					<div id='controls'>
						<div className="button_cont" align="center"
							onClick={() => this.startJamClick()}>
							<a className="example_c" target="_blank" rel="nofollow noopener">
								<img src="./referee.png" />Mark Jam {this.state.jamNumber}
							</a>
						</div>
					</div>
				</div>
				<Sidebar jamList={this.state.jamList} />
			</div>
		);
	}
	init() {
		var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}

	onPlayerStateChange(event) {
		console.log(event)
		switch (event.data) {
			case window['YT'].PlayerState.PLAYING:
				if (this.cleanTime() == 0) {
					console.log('started ' + this.cleanTime());
				} else {
					console.log('playing ' + this.cleanTime())
				};
				break;
			case window['YT'].PlayerState.PAUSED:
				if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
					console.log('paused' + ' @ ' + this.cleanTime());
				};
				break;
			case window['YT'].PlayerState.ENDED:
				console.log('ended ');
				break;
		};
	};

	startJamClick() {
		// console.log(this.props)
		console.log(this.player.getCurrentTime());
		this.setState({
			'jamList': [...this.state.jamList, {
				'id': this.state.jamNumber,
				'name': 'jam start',
				'startTime': Math.floor(this.player.getCurrentTime())
			}],
			'jamNumber': this.state.jamNumber += 1
		})
		console.log(this.state)
	};

	//utility
	cleanTime() {
		return Math.round(this.player.getCurrentTime())
	};
	onPlayerError(event) {
		switch (event.data) {
			case 2:
				console.log('' + this.video)
				break;
			case 100:
				break;
			case 101 || 150:
				break;
		};
	};
}

export default Player;