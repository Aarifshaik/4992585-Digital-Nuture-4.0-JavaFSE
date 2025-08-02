import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Aarif", score: 85 },
    { name: "Ayesha Tabassum", score: 85 },
    { name: "Ayesha", score: 72 },
    { name: "Ashraf", score: 95 },
    { name: "Arshad", score: 68 },
    { name: "Aamir", score: 77 },
    { name: "Shaiq", score: 54 },
    { name: "Aamina", score: 88 },
    { name: "Tabassum", score: 90 },
    { name: "Summaiyya", score: 66 },
    { name: "Rabiya", score: 73 },
  ];

  // Filter players with scores below 70
  const player70 = players.filter((player) => player.score < 70);

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}>
      <h2>All Players</h2>
      <ul>
        {players.map((item, idx) => (
          <li key={idx}>
            Mr. {item.name} <span>Score: {item.score}</span>
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      {player70.length > 0 ? (
        <ul>
          {player70.map((p, i) => (
            <li key={i}>
              Mr. {p.name} <span>Score: {p.score}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>None</p>
      )}
    </div>
  );
};

export default ListofPlayers;