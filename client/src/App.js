import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [seen, setSeen] = useState(false);

  const seter = (e) => {
    if (seen === false) {
      setSeen(true);
      e.target.innerHTML = "Hide todo's!";
    } else if (seen === true) {
      setSeen(false);
      e.target.innerHTML = "Show todo's!";
    }
  };

  return (
    <div className="App">
      <div>
        <Form />
      </div>
      {seen ? (
        <div>
          <TodoList />
        </div>
      ) : (
        " "
      )}
      <br></br>
      <button onClick={seter}>Show todo's!</button>
    </div>
  );
}

export default App;