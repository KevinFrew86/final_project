import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <h4>{this.props.children}</h4>
        <p>{this.props.name} - {this.props.team} - {this.props.position}</p>

      </div>
    );
  }
}

export default Player;
