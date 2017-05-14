let React = require('react');

let WeatherResult = (props) => <h3 className="text-center">It is {props.temp} in {props.location}</h3>

module.exports = WeatherResult;
