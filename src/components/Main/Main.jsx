import "./Main.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




const Main = () => {
  const dateActual = new Date();
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    const newTask = {
        name: task,
        completed: false,
        id:uuidv4(),
    };
    setTodoList([...todoList, newTask]);
    setTask("");
    };

    const deleteTodo = (id) => {
      const newTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(newTodoList);
    };
    const completeTodo = (todo) => {
      let temporalTodo = todoList;
      const position = temporalTodo.indexOf(todo);
      temporalTodo[position].completed = !temporalTodo[position].completed;
      setTodoList([...temporalTodo]);
    };


  return (
  <main>
    <div>
      <input 
        type="text" 
        placeholder="Task..." 
        value={task}
        onInput={(ev) => setTask(ev.target.value)}
        />
      <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((item) => (
            <li key={item.id}>
              <h3>
              {item.name + "-" + dateActual}</h3>
              <button onClick={() => deleteTodo(item.id)}
              >X</button>
            </li>
        ))}
     </ul>
    </main>
  );
};

export default Main