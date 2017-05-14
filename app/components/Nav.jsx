let React = require('react');
let { Link, IndexLink } = require('react-router');

let Nav = React.createClass({

  onSearch(e) {
    e.preventDefault();

    let location = this.refs.location.value;
    let encodeLocation = encodeURIComponent(location);

    if (encodeLocation.length > 0) {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodeLocation;
    }
  },

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" ref="location"/>
              </li>
              <li>
                <button className="button">Get Weather</button>
              </li>
            </ul>
          </form>

        </div>
      </div>
    )
  }
})

module.exports = Nav;
