import React, { Component } from 'react';

class Plunder extends Component {
	constructor(props){
		super(props)
		this.state = {
			//State where API will put poem
			shakeSpeare: ''
		}
	}

	componentDidMount(){
		var base = this;
		let poemApi = 'http://ShakeItSpeare.com/api/poem'
		fetch(poemApi)
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			base.setState({shakeSpeare: json.poem});
		})
		.catch((ex) => {
			console.log('An error occured while parsing!', ex);
		})
	}
	
	render() {
		let poetry = this.state.shakeSpeare;
		
		// Loading image!
		if (!this.state.shakeSpeare){
			return (
				<div class="preloader-wrapper big active">
					<div class="spinner-layer spinner-blue-only">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div><div class="gap-patch">
							<div class="circle"></div>
						</div><div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>
				</div>
			)
		}
		return(
			<div className="Plunder">
				<h6>I enjoy the fine works from the skallywag Shake'o'speare</h6>
				<h2>{poetry}</h2>
			</div>
		);
	}
}

export default Plunder;