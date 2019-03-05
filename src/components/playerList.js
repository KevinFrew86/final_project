import React, { Component } from "react";
import Player from "./player";

class PlayerList extends Component {
  render() {
    const playerNodes = this.props.squad.map(player => {
      return (
        <Player name={player.name} team={player.team} position={player.position} key={player.id}></Player>
      );
    });

    return (
      <div className="player-list">
        {playerNodes}
      </div>
    )
  }
}

export default PlayerList;
