import React from "react";

export default function DataCard(props) {
  console.log(props);
  return (
    <div className="data-card">
      <h2>{props.player.name}</h2>
      <h4>Country: {props.player.country}</h4>
      <p>Amount of Searches: {props.player.searches}</p>
    </div>
  );
}
