import { useEffect, useState } from "react";
import API from "../services/api";
import AddTask from "./AddTask";

export default function TaskList({ projectId }) {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("");

  const fetchTasks = async () => {
    let url = `/tasks/projects/${projectId}/tasks`;

    if (status) {
      url += `?status=${status}&sort=due_date`;
    }

    const res = await API.get(url);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, [projectId, status]);

  return (
    <div>
      <h3>Tasks</h3>

      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <AddTask projectId={projectId} refresh={fetchTasks} />

      {tasks.map((t) => (
        <div key={t.id} style={{ border: "1px solid gray", padding: "10px" }}>
          <b>{t.title}</b>
          <p>{t.description}</p>

          <p>Status: {t.status}</p>
          <p>Priority: {t.priority}</p>
          <p>Due: {t.due_date}</p>
        </div>
      ))}
    </div>
  );
}