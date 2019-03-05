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
    const positions = ['Goalkeeper', 'Left Back', 'Central defender', 'Right Back', 'Left Wing', 'Central Midfield', 'Right Wing', 'Striker']

    const options = positions.map((position, index) => {
      return <option key={index} value={position}>{position}</option>
    })

    return (
      <form className="player-form" onSubmit={this.handleSubmit}>

      <input type="text" placeholder="Enter player name" value={this.state.name} onChange={this.handleNameChange} />

      <input type="text" placeholder="Enter team played for" value={this.state.team} onChange={this.handleTeamChange} />

      <select name="poisition" onChange={this.handlePositionChange}>
      <option defaultValue value="default" >Choose a position</option>
      {options}
      </select>

      <input type="submit" value="Add player"/>

      </form>
    )
  }

}

export default PlayerForm;
