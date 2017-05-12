let React = require('react');
let { Link, IndexLink } = require('react-router');

let Nav = () => {
  return (
      <div>
        <h1>Application nav</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Get Weather</IndexLink></li>
          <li><Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>About</Link></li>
          <li><Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Examples</Link></li>
        </ul>
      </div>
  );
}

module.exports = Nav;
