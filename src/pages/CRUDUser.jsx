import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CRUDUser() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), task: event.target.task.value }]);
  };

  const handleEditTodo = (id, task) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.task = task;
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-gray-200 p-4">
      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          type="text"
          placeholder="Add Todo"
          name="task"
          className="border rounded p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </form>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Task</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="px-4 py-2">{todo.task}</td>
              <td className="px-4 py-2">
                <button
                  className="bg-yellow-500 text-white p-2 rounded mr-2"
                  onClick={() => handleEditTodo(todo.id, prompt("Edit Todo"))}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDUser;
