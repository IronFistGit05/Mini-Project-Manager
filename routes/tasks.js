import express from "express";
import {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/projects/:project_id/tasks", createTask);
router.get("/projects/:project_id/tasks", getTasksByProject);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;