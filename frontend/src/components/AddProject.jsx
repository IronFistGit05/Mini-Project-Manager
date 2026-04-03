import { useState } from "react";
import API from "../services/api";

export default function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name) return alert("Enter project name");

    await API.post("/projects", { name, description });

    setName("");
    setDescription("");
    window.location.reload();
  };

  return (
    <div>
      <h3>Add Project</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name"
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project description"
      />

      <br /><br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}