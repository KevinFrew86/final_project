import React, { Component } from "react";
import TeamList from "../components/teamList";
import TeamForm from "../components/teamForm";

class TeamBox extends Component {

  constructor(props) {
    super(props);
      this.state = {
        dreamTeam: []
      };

      this.handleSubmitTeam = this.handleSubmitTeam.bind(this);
  }

  handleSubmitTeam(newTeam) {
    newTeam.id = Date.now();
    const updatedTeams = [...this.state.dreamTeam, newTeam];
      this.setState({dreamTeam: updatedTeams});
  }

  render() {
    return (
      <div className="team-box">
      <h2>Make your team</h2>
      <TeamForm onTeamSubmit={this.handleSubmitTeam} />
      <TeamList dreamTeam={this.state.dreamTeam} />
      </div>
    );
  }
}

export default TeamBox;
