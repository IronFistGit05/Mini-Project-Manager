import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    database: "Project-Management-System-DB",
    password: "mike5000",
    host: "localhost",
    port: 5432
});