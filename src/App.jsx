import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

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
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button
        style={{
          padding: "10px",
          background: "#200f7d",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default App;
