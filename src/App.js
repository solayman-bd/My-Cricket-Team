import { useEffect, useState } from "react";
import MyTeam from "./components/MyTeam/MyTeam";
import PlayerList from "./components/PlayerList/PlayerList";
import playerDetails from "./data/data.json";

function App() {
  const [playersInfo, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(playerDetails);
  }, []);
  const [count, setCount] = useState([]);
  const [salary, setSalary] = useState([]);
  const clickHandler = (playerName, playerSalary) => {
    let l = 0;
    count.map((previousPlayer) => {
      if (previousPlayer === playerName) {
        l++;
      }
    });
    if (l === 0) {
      const newCount = [...count, playerName];
      setCount(newCount);
      const salaryList = [...salary, playerSalary];
      setSalary(salaryList);
    } else {
      alert("The Player is already selected!!");
    }
  };

  return (
    <div className="container text-center">
      <div className="my-team">
        <MyTeam salary={salary} count={count}></MyTeam>
      </div>
      <div className="player-details bg-success w-50 mx-auto">
        <h1>Players List</h1>
        {playersInfo.map((players) => (
          <PlayerList
            clickHandler={clickHandler}
            players={players}
          ></PlayerList>
        ))}
      </div>
    </div>
  );
}

export default App;
