import React from "react";
import { DataCard } from "./DataCard";

export default class DataList extends React.Component {
  //mounting
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => {
        this.setState({ players: res });
      })
      .catch(err => console.log(err));
  }

  //update
  render() {
    return (
      <div className="player-list">
        {this.state.players.map(player => {
          return <DataCard key={player.id} player={player} />;
        })}
      </div>
    );
  }
}
