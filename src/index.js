import React, { useState } from "react";
import { render } from "react-dom";

import Timer from "./Timer";

function Admin() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("Enter your name");

  return (
    <>
      {!login ? <h1>My Pomodoro</h1> : <h1>Let's start</h1>}
      {!login ? (
        <input
          type="text"
          maxLength="10"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="ui-input"
        />
      ) : (
        <input
          type="text"
          value={name}
          disabled="disabled"
          className="ui-input"
        />
      )}
      <button onClick={() => setLogin(true)} className="ui-button">
        Log in
      </button>
      {login && (
        <>
          <button onClick={() => setLogin(false)} className="ui-button">
            Log out
          </button>
          <Timer />
        </>
      )}
    </>
  );
}

render(<Admin />, document.querySelector("#root"));
