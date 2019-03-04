import React, { Component } from "react";
import Player from "./player";

class DreamTeam extends Component {
  render() {
    const playerNodes = this.props.squad.map(player => {
      return (
        <Player name={player.name} key={player.id}>{player.team}</Player>
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
