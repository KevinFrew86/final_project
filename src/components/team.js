import React, { Component} from "react";

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <h4>{this.props.children}</h4>
        <p>{this.props.teamName}</p>
      </div>
    );
  }
}

export default Team;
