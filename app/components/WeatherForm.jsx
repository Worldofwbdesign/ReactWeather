let React = require('react');

let WeatherForm = React.createClass({

  onSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
