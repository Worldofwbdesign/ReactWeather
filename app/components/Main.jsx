let React = require('react');
let Nav = require('Nav');

let Main = (props) => {
  return (
      <div>
        <Nav/>
        <div className="row">
          <div className="column medium-8 large-6 small-centered">
            {props.children}
          </div>
        </div>
      </div>
  );
}

module.exports = Main;
