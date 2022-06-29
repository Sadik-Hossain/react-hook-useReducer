import { useState, useReducer } from "react";

import "./App.css";
//* useReducer is like redux
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

//* general convention: action type declaration
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
};

function App() {
  //* useReducer takes 2 param. 1: reducer(logic), 2. initial state
  //* instead of using multiple state, we can use one reducer to work with multiple state
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });
  // const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(false);

  return (
    // <main className="App" style={{ color: color ? "#FFF" : "#FFF952" }}>
    <main className="App" style={{ color: state.color ? "salmon" : "#000" }}>
      <h1>UseReducer</h1>
      <input
        type="text"
        // value={userInput}
        value={state.userInput}
        // onChange={(e) => setUserInput(e.target.value)}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      {/* <p>{count}</p> */}
      <p>{state.count}</p>
      <section>
        {/* <button onClick={() => setCount((prev) => prev - 1)}>-</button> */}
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>+</button> */}
        <button onClick={() => dispatch({ type: "increment" })}> + </button>
        <button onClick={() => dispatch({ type: "tgColor" })}>color</button>
      </section>
      <br />
      {/* <p>{userInput}</p> */}
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
