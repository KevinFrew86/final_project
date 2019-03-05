import React, { Component } from "react";
import Playerlist from "../components/playerList";

class TeamForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      manager: '',
      squad: []
    };
    this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
    this.handleManagerChange = this.handleManagerChange.bind(this);
    this.handleSquadChange = this.handleSquadChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTeamNameChange(event) {
    this.setState({ teamName: event.target.value });
  }

  handleManagerChange(event) {
    this.setState({ manager: event.target.value });
  }

  handleSquadChange(event) {
    this.setState({squad: event.target.value});
  }


  handleSubmit(event) {
    event.preventDefault();
    const teamName = this.state.teamName;
    const manager = this.state.manager;
    const squad = this.state.squad;
    if(!teamName || !manager) {
      return
    }

    this.props.onTeamSubmit({ teamName: teamName, manager: manager , squad: squad });

    this.setState({ teamName: '', manager: '', squad: []});
  }

  render() {
    return (
      <form className="team-form" onSubmit={this.handleSubmit}>

        <input type="text" placeholder="Enter your team's name" value={this.state.teamName} onChange={this.handleTeamNameChange} />

        <input type="text" placeholder="Enter manager name" value={this.state.manager} onChange={this.handleManagerChange} />

        <input type="submit" value="Add team" />

      </form>
    )
  }

}

export default TeamForm;
