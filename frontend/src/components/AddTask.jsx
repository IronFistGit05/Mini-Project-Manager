import { useState } from "react";
import API from "../services/api";

export default function AddTask({ projectId, refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = async () => {
    if (!title) return alert("Enter task");

    await API.post(`/tasks/projects/${projectId}/tasks`, {
      title,
      description,
      status,
      priority,
      due_date: dueDate
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    refresh();
  };

  return (
    <div>
      <h4>Add Task</h4>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <label>Status: </label>
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <br /><br />

      <label>Priority: </label>
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <br /><br />

      <label>Due Date: </label>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}