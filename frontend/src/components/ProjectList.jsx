import { useEffect, useState } from "react";
import API from "../services/api";

export default function ProjectList({ onSelect }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div>
      <h3>Projects</h3>
      {projects.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <b onClick={() => onSelect(p.id)} style={{ cursor: "pointer" }}>
            {p.name}
          </b>

          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}