let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
  return (
      <div>
        <Nav/>
        <h1>Main application</h1>
        {props.children}
      </div>
  );
}

module.exports = Main;
