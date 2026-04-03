import { useState } from "react";
import ProjectList from "./components/ProjectList";
import AddProject from "./components/AddProject";
import TaskList from "./components/TaskList";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ padding: "10px", display: "flex", flexDirection: "column" , justifyContent: "center" }}>
      <h1 style={{alignSelf: "center"}}>Project Manager</h1>

      <AddProject />
      <ProjectList onSelect={setSelectedProject} />

      {selectedProject && (
        <TaskList projectId={selectedProject} />
      )}
    </div>
  );
}