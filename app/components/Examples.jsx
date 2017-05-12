let React = require('react');
let { Link } = require('react-router');

let Examples = () =>
  <div>
    <h2 className="text-center">Examples</h2>
    <p>This is examples page</p>
    <ol>
      <li>
        <Link to="/?q=london">London, UK</Link>
      </li>
      <li>
        <Link to="/?q=philadelphia">Philadelphia, USA</Link>
      </li>
    </ol>
  </div>
;

module.exports = Examples;
