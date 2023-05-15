import Form from "./components/Form";

import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { db } from "./components/Firebase";
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  //Create Todo
  const createTodo = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  //Read Todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodo(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update Todo
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //Delete Todo

  return (
    <div className="h-screen w-screen p-4 bg-teal-300 overflow-y-scroll">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 p-2">A DEV'S TODO LIST</h1>
        <Form createTodo={createTodo} input={input} setInput={setInput} />
        <ul>
          {todo.map((todos, index) => (
            <Todo key={index} todos={todos} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p>{`You have ${todo.length} task left!`}</p>
      </div>
    </div>
  );
};

export default App;
