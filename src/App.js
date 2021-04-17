import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebaseConfig";
import firebase from "firebase";
import TodoList from "./Todo";

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    db.collection("todo_sample").onSnapshot(function (querySnapshot) {
      setListTodo(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inProgress: doc.data().inProgress,
        }))
      );
    });
  }

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("hello todo");
    db.collection("todo_sample").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo,
    });
    setTodo("");
  };
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <form>
        <input
          placeholder="Take a note..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button
          style={{ display: "none" }}
          type="submit"
          onClick={clickHandler}
        >
          Submit
        </button>
      </form>
      {listTodo.map((todo) => (
        <TodoList todo={todo.todo} inProgress={todo.inProgress} id={todo.id} />
      ))}
    </div>
  );
}

export default App;
