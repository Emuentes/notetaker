var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        Repo component<br />
        Username: {this.props.username}<br />
        bio: {this.props.bio}
      </div>
    );
  }
});

module.exports = Repos;
