import { useState } from "react";
import "./App.css";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor: import.meta.env.VITE_BACKGROUND_COLOR ?? "black",
      }}
    >
      <div id="background-stars">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
      </div>
      <div className="scene scene--card">
        <div
          className={`card ${isFlipped ? "is-flipped" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card__face card__face--front">
            <img src="https://placehold.co/600x425" alt="logo" />
          </div>
          <div className="card__face card__face--back">
            <img src="https://placehold.co/600x425" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
