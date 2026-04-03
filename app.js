import express from "express";
import cors from "cors";
import projectRoutes from "./routes/projects.js";
import taskRoutes from "./routes/tasks.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})