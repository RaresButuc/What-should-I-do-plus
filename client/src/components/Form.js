import React from "react";
import { useState } from "react";

function Form() {
  const [titles, setTitle] = useState("");
  const [comments, setComment] = useState("");

  const returnTitle = (event) => {
    setTitle(event.target.value);
  };
  const returnComment = (event) => {
    setComment(event.target.value);
  };

  const submitIt = async (e) => {
    e.preventDefault();
    let todoInfos = {
      title: titles,
      comment: comments,
    };

    const response = await fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todoInfos),
    });
  };

  return (
    <form name="myForm" onSubmit={submitIt} method="post">
      Title:
      <input type="text" name="title" onChange={returnTitle}></input>
      <br></br> <br></br>
      Comment:
      <input type="text" name="comment" onChange={returnComment}></input>
      <br></br>
      <br></br>
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default Form;