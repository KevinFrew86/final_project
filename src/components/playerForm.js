import React, { Component } from "react";

class PlayerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      team: '',
      position: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTeamChange = this.handleTeamChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleTeamChange(event) {
    this.setState({ team: event.target.value });
  }

  handlePositionChange(event) {
    this.setState({ position: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const team = this.state.team;
    const position = this.state.position;
    if (!name || !team || !position) {
      return
    }

    this.props.onPlayerSubmit({ name: name, team: team, position: position});

    this.setState({name: '', team: '', position: ''});

  }

  render() {
    return (
      <form className="player-form" onSubmit={this.handleSubmit}>

        <input type="text" placeholder="Enter player name" value={this.state.name} onChange={this.handleNameChange} />

        <input type="text" placeholder="Enter team played for" value={this.state.team} onChange={this.handleTeamChange} />

        <input type="text" placeholder="Enter position" value={this.state.position} onChange={this.handlePositionChange} />

        <input type="submit" value="Add player"/>

      </form>
    )
  }



}

export default PlayerForm;
