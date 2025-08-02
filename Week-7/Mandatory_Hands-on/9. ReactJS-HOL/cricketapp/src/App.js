import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";
import { useState } from "react";

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1>Cricket App</h1>
      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            checked={flag}
            onChange={() => setFlag((f) => !f)}
            style={{ marginRight: 6 }}
          />
          Flag (when true shows List of Players; when false shows Indian Players)
        </label>
      </div>

      {flag ? (
        <>
          <ListofPlayers />
        </>
      ) : (
        <div style={{ padding: 0, background: "", borderRadius: 6 }}>
          <IndianPlayers />
        </div>
      )}
    </div>
  );
};
export default App;
