const IndianPlayers = () => {
    const indianPlayers = [
      "Aarif",
      "Ayesha Tabassum",
      "Ayesha",
      "Sumaiyya",
      "Rabiya",
      "Tasneem",
      "Tabassum",
      "Ashraf",
      "Arshad",
      "Mobashir",
      "Danish",
    ];
  
    const [firstPlayer,, thirdPlayer,,fifthPlayer, ...restPlayers] = indianPlayers;
  
    const oddTeam = indianPlayers.filter((_, idx) => idx % 2 === 0); 
    const evenTeam = indianPlayers.filter((_, idx) => idx % 2 === 1);
    
    const T20players = ["Rohit", "Virat", "Suryakumar"];
    const RanjiTrophy = ["Cheteshwar", "Wasim", "Ajinkya"];
  
    const mergedPlayers = [...T20players, ...RanjiTrophy];
  
    return (
      <div style={{ border: "1px solid #888", padding: 12, borderRadius: 8, marginTop: 16 }}>
        <h2>Indian Players</h2>
  
        <div>
          <h3>Destructured Players</h3>
          <p>First: {firstPlayer}</p>
          <p>Third: {thirdPlayer}</p>
          <p>Fifth: {fifthPlayer}</p>
          <p>Rest count: {restPlayers.length}</p>
        </div>
  
        <div>
          <h3>Odd Team Players (by index) using filter</h3>
          <ul>
            {oddTeam.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3>Even Team Players (by index) using filter</h3>
          <ul>
            {evenTeam.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3>Merged Squad (T20 + RanjiTrophy)</h3>
          <ul>
            {mergedPlayers.map((p) => (
              <li>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
export default IndianPlayers;