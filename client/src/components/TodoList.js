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

  const deleteIt = async (e) => {
    await fetch("http://localhost:5000/api/todo/" + e, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const editIt = async () => {
    await fetch("http://localhost:5000/api/todo/", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <p>{todo.comment}</p>
          <button onClick={() => deleteIt(todo._id)}>X</button>
          <button onClick={editIt}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
