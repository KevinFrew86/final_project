import React, { Component } from "react";
import DreamTeam from "../components/dreamTeam";
import PlayerForm from "../components/playerForm";

class TeamBox extends Component {

  constructor(props) {
    super(props);
      this.state = {
        squad: []
      };

    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  }

  handlePlayerSubmit(newPlayer) {
    newPlayer.id = Date.now();
    const updatedPlayers = [...this.state.squad, newPlayer];
    this.setState({squad: updatedPlayers});
  }

  render() {
    return (
      <div className="team-box">
        <h2>Add a Player</h2>
        <PlayerForm onPlayerSubmit={ this.handlePlayerSubmit} />
        <h2>Players</h2>
        <DreamTeam squad={this.state.squad} />
      </div>
    );
  }
}

export default TeamBox;
