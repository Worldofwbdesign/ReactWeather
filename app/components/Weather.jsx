let React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherResult = require('WeatherResult'),
    getWeatherMap = require('getWeatherMap');


let Weather = React.createClass({

  getInitialState() {
    return {
      isLoading: false
    }
  },

  handleSearch(location) {
    this.setState({isLoading: true});

    getWeatherMap.getTemp(location).then( (temp) => {
      this.setState({
        location,
        temp,
        isLoading: false
      })
    }, () => {
      throw new Error('Something is wrong');
      this.setState({isLoading: false});
    })
  },

  render() {
    let { isLoading, location, temp } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Loading weather...</h3>
      } else if (location && temp) {
        return <WeatherResult location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        { renderMessage() }
      </div>
    )
  }
});

module.exports = Weather;
