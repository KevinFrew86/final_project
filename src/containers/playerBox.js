import React, { Component } from "react";
import PlayerList from "../components/playerList";
import PlayerForm from "../components/playerForm";

class PlayerBox extends Component {

  constructor(props) {
    super(props);
      this.state = {
        squad: [
          { id: 1,
            name: 'Kevin Frew',
            team: 'Celtic',
            position: 'Left Wing'
          }
        ]
      };

    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }

  isAtMax() {
    return (this.state.squad.length === 11);
  }

  handlePlayerSubmit(newPlayer) {
    if (!this.isAtMax()) {
      newPlayer.id = Date.now();
      const updatedPlayers = [...this.state.squad, newPlayer];
      this.setState({squad: updatedPlayers});
    }
    // once all the players are in the team, the button makes a post request instead to the api
  }

  render() {
    return (
      <div className="player-box">
        <h2>Add a Player</h2>
        <PlayerForm onPlayerSubmit={ this.handlePlayerSubmit} />
        <h2>Starting Lineup</h2>
        <PlayerList squad={this.state.squad} />
      </div>
    );
  }
}

export default PlayerBox;
