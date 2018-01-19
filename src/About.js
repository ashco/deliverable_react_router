import React, { Component } from 'react';
import Widget from './Widget.js';

class About extends Component {
	constructor(props){
		super(props);
		// this.state = {
			// zipcode: '',
		// 	main: '',
		// 	temp: '',
		// 	name: '',
		// 	error: ''
		// }
		this.state = {
			zipcode: '',
			weatherData: ''
		}


		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({zipcode: event.target.value})
    // console.log('Your zip code is ' + this.state.zipcode)
	}
	
  handleSubmit(event) {
		event.preventDefault();
		var base = this;
		let weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zipcode + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial'
		// console.log(weatherAPI);
		fetch(weatherAPI)
		.then((response) => {
			return response.json()
		})
		.then((json) => {
			base.setState({
				weatherData: json
				// main: json.weather[0].main,
				// temp: json.main.temp,
				// name: json.name
			});
		})
		.catch((ex) => {
			console.log('An error has occured, please run.', ex);
		})
  }

	render(){
		let weatherInfo = this.state;

		return(
			<div className="About">
				<div className="card">

					<form onSubmit={this.handleSubmit}>
						Enter ye' zip here:
						<div className="input-field inline">
							<input type="number" onChange={this.handleChange} />
						</div>
						<input className="waves-effect waves-light btn #424242 grey darken-3" type="submit" value="Get ye forecast!" />
					</form>

					<Widget weatherData={this.state.weatherData} zipcode={this.state.zipcode}/>		
					{/* <div>
						<p>The skys be {weatherInfo.main}y</p>
						<p>With a temperature of {weatherInfo.temp}</p>
						<p>On the stormy seas of {weatherInfo.name}</p>
					</div> */}

		
				</div>
			</div>
		);
	}
}

export default About;


