import e from "express";
import {pool} from "../db/index.js";

//To GET projects(Where Page = 1 and Limit = 10)
export const getProjects = async (req,res,next) =>{
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const result = await pool.query(
            "SELECT * FROM projects ORDER BY created_at DESC LIMIT $1 OFFSET $2",
            [limit, offset]
        );
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

//To GET projects by ID
export const getProjectById = async (req,res,next) =>{
    try {
        const result = await pool.query(
            "SELECT * FROM projects WHERE id = $1",
            [req.params.id]
        );

        if(result.rows.length === 0){
            return res.status(404).json({error: `Project not found for the id:${req.params.id}`});
        }

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// To POST projects 
export const createProject = async(req,res,next) => {
    try {
        const {name, description } = req.body;

        if(!name){
            return res.status(400).json({error: "Name is required"});
        }

        const result = await pool.query(
            "INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *",[name, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

// To DELETE Projects
export const deleteProject = async(req,res,next) =>{
    try {
        await pool.query("DELETE FROM projects WHERE id = $1",[req.params.id]);
        res.json({messahe: "Project deleted"});
    } catch (error) {
        next(error);
    }
};