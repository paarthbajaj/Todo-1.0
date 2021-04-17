import React from "react";
import "./App.css";
import { db } from "./firebaseConfig";

export default function TodoList({ todo, inProgress, id }) {
  function progressHandler() {
    db.collection("todo_sample").doc(id).update({
      inProgress: !inProgress,
    });
  }

  function deleteTodo() {
    db.collection("todo_sample").doc(id).delete();
  }

  return (
    <div className="center">
      <li>
        <ul>{todo}</ul>
        <ul className="secondary">
          {inProgress ? "In Progress" : "Completed"}
        </ul>
      </li>
      <button onClick={progressHandler}>
        {inProgress ? "Done" : "Undone"}
      </button>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
}
