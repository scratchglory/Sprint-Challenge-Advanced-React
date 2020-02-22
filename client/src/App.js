import React from "react";
import "./App.css";
// import DataList from "./components/DataList";
import useShowing from "./hooks/useShowing";
import Display from "./components/Display";

function App() {
  const { isShowing, toggle } = useShowing();
  return (
    <div className="App">
      <h1>Women's World Cup Players!!</h1>
      <button onClick={toggle}>Display Players</button>

      <Display isShowing={isShowing} hide={toggle} />
    </div>
  );
}

export default App;
