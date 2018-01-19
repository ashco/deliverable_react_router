import React from 'react';

const Widget = (props) => {
	console.log(props);
	if (Object.keys (props.weatherData).length > 0){ 
		return (
			<div>
				<p>The skys be {props.weatherData.weather[0].main}y</p>
				<p>With a temperature of {props.weatherData.main.temp}</p>
				<p>On the stormy seas of {props.weatherData.name}</p>
			</div>
		)
	}
	else {
		return (
			<div>
				<h1>Hello there</h1>
			</div>
		)
	}
}

export default Widget;