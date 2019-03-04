import React, { Component } from "react";
import Player from "./player";

class DreamTeam extends Component {
  render() {
    const playerNodes = this.props.squad.map(player => {
      return (
        <Player name={player.name} team={player.team} position={player.position} key={player.id}></Player>
      );
    });

    return (
      <div className="dream-team">
        {playerNodes}
      </div>
    )
  }
}

export default DreamTeam;
