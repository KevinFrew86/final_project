import React, { Component } from 'react';
import './App.css';
import PlayerBox from "./containers/playerBox";
import TeamBox from "./containers/teamBox";

class App extends Component {
  render() {
    return <PlayerBox />;
    //return <TeamBox />;

  }
}

export default App;
