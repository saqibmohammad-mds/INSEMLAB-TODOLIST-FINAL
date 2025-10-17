import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    const title = task.trim();
    if (!title) return;
    setTodos([...todos, { id: Date.now(), title, done: false }]);
    setTask("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTask(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif", maxWidth: 400, margin: "auto" }}>
      <h2>Daily Tasks</h2>
      <div>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
          style={{ padding: 6, marginRight: 8 }}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {todos.map((t) => (
          <li key={t.id} style={{ marginTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #ddd", padding: "6px 8px", borderRadius: 6 }}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggleDone(t.id)} />
              <span style={{ marginLeft: 6, textDecoration: t.done ? "line-through" : "none" }}>{t.title}</span>
            </label>
            <button onClick={() => removeTask(t.id)} style={{ border: "none", background: "transparent", color: "red", cursor: "pointer" }}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
