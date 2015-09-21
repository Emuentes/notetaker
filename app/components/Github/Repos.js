var React = require('react');

var Repos = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    return (
      <div>
        <h3> User Repos </h3>
        <ul className="list-group">
          {this.props.repos}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;
