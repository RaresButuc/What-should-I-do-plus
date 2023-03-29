import React from "react";
import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/todo");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
