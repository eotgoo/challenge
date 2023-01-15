import React from "react";

export default function PlayerInfo(props) {
  const { player, add, min } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>{player.name}</h3>
        <button onClick={() => add(player.name)}>+</button>
        {player.score}
        <button onClick={() => min(player.name)}>-</button>
      </div>
    </div>
  );
}
