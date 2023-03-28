import React, { useState } from "react";
import { MdDeleteForever, MdDone } from "react-icons/md";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completed, setCompleted] = useState({});

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = { id: todos.length + 1, text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <input
        className="input"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="add" onClick={handleAddTodo}>
        Add
      </button>
      <ul className="list">
        {todos.map((todo) => (
          <li className="lister" key={todo.id}>
            <label>
              <button
                className="checkbox"
                onClick={() => {
                  setCompleted({
                    ...completed,
                    [todo.id]: !completed[todo.id],
                  });
                }}
              >
                <MdDone />
              </button>
              <span className={completed[todo.id] ? "completed" : ""}>
                {todo.text}
              </span>
            </label>
            <button
              className="delete"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <MdDeleteForever />
            </button>
          </li>
        ))}
        <div>
          <p className="end">
            <em className="items">{todos.length} items left</em>
          </p>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
