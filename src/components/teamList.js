import React, { Component } from "react";
import Team from "./team";

class TeamList extends Component {
  render() {
    const teamNodes = this.props.dreamTeam.map(team => {
      return (
        <Team name={team.teamName} manager={team.manager} key={team.id}></Team>
      );
    });

    return (
      <div className="team-list">
        {teamNodes}
        </div>
    )
  }
}

export default TeamList;
