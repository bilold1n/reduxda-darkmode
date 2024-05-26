import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const countvalue = useSelector((state) => state.count);
  const darkMode = useSelector((state) => state.darkMode);
  console.log(darkMode);
  console.log(countvalue);
  const dispatch = useDispatch();
  const [count, setcount] = useState(0);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#FFF",
        color: darkMode ? "#FFF" : "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Buttunlarni bosing !</h1>
      <div className="orab">
        <button
          style={{
            padding: "10px",
            background: "#200f7d",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch({ type: "TOGGLE_DARK_MODE" });
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "incriment" });
          }}
        >
          count is {countvalue ?? 0}
        </button>
      </div>
    </div>
  );
};

export default App;
