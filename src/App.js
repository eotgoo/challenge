import { players as data } from "./components/data/player";
import PlayerInfo from "./components/PlayerInfo";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [players, setPlayers] = useState(data);
  //add
  const increamentHandler = (name) => {
    console.log(name, "add");
    const playerIndex = players.findIndex((player) => player.name === name);
    players[playerIndex].score += 1;
    sortScores();
    setPlayers([...players]);
  };

  //min

  const decreaseHandler = (name) => {
    console.log(name, "min");
    const playerIndex = players.findIndex((player) => player.name === name);
    players[playerIndex].score -= 1;
    sortScores();
    setPlayers([...players]);
  };

  //sort
  const sortScores = () => {
    players.sort((player1, player2) => player2.score - player1.score);
    setPlayers([...players]);
  };
  return (
    <div className="App">
      {players.map((player, index) => {
        return (
          <div key={index}>
            <PlayerInfo
              player={player}
              add={increamentHandler}
              min={decreaseHandler}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
