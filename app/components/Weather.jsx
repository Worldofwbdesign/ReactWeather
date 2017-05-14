let React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherResult = require('WeatherResult'),
    getWeatherMap = require('getWeatherMap'),
    ErrorModal = require('ErrorModal');


let Weather = React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: false
    });

    getWeatherMap.getTemp(location).then( (temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      })
    }, () => {
      this.setState({
        isLoading: false,
        errorMessage: true
      });
    })
  },

  render() {
    let { isLoading, location, temp, errorMessage } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading weather...</h3>
      } else if (location && temp) {
        return <WeatherResult location={location} temp={temp}/>
      }
    }
    function renderError() {
      if (errorMessage) {
        return (
          <ErrorModal message='Город не найден'/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMessage() }
        { renderError() }
      </div>
    )
  }
});

module.exports = Weather;
