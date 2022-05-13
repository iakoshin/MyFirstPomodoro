import React, { useState } from "react";
import "./styles.css";

export default function Timer() {
  const [mins, setMins] = useState(25);
  const [timerActive, setTimerActive] = useState(false);

  function handleMinusClick() {
    if (mins > 0) {
      setMins(mins - 1);
    } else if (mins === 0) {
      setMins(25);
    }
  }
  function handleAddClick() {
    setMins(mins + 1);
  }

  React.useEffect(() => {
    if (mins > 0 && timerActive) {
      setTimeout(setMins, 60 * 1000, mins - 1);
    } else {
      setTimerActive(false);
    }
  }, [mins, timerActive]);

  return (
    <div>
      {mins ? (
        <React.Fragment>
          <button
            onClick={() => setTimerActive(!timerActive)}
            className="ui-button"
          >
            {timerActive ? "Stop" : "Start"}
          </button>
          <h1>Minutes left: {mins}</h1>
          <button onClick={handleMinusClick} className="ui-button">
            Less
          </button>
          <button onClick={handleAddClick} className="ui-button">
            More
          </button>
        </React.Fragment>
      ) : (
        <button onClick={() => setMins(60 * 1000)} className="ui-button">
          Again
        </button>
      )}
    </div>
  );
}
