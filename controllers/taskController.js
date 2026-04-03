import { pool } from "../db/index.js";

// To GET Tasks
export const getTasksByProject = async(req,res,next) => {
    try {
        const { project_id } = req.params;
        const {status, sort } = req.query;

        let query = "SELECT * FROM tasks WHERE project_id = $1";
        let values = [project_id];

        if(status){
            query += " AND status = $2";
            values.push(status);
        }

        if(sort === "due_date"){
            query += " ORDER BY due_date ASC";
        }

        const result = await pool.query(query, values)
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

// To POST Tasks
export const createTask = async (req, res, next) => {
    try {
        const { project_id } = req.params;
        const { title, description, status, priority, due_date } = req.body;

        if (!title) {
            return res.status(400).json({ error: "Titlte is required" });
        }

        const result = await pool.query(
            "INSERT INTO tasks (project_id, title, description, status, priority, due_date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [project_id, title, description, status, priority, due_date]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// To PUT tasks(modify it)
export const updateTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, due_date } = req.body;

    const result = await pool.query(
      "UPDATE tasks SET title=$1, description=$2, status=$3, priority=$4, due_date=$5 WHERE id=$6 RETURNING *",
      [title, description, status, priority, due_date, req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

// To DELETE Tasks
export const deleteTask = async (req, res, next) => {
  try {
    await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
    res.json({ message: "Task deleted" });
  } catch (err) {
    next(err);
  }
};