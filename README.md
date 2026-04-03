# Mini Project Management System

A full-stack web application that allows users to manage projects and tasks efficiently. Users can create projects, add tasks, track progress, and organize work using features like filtering, sorting, and pagination.

---

## Tech Stack

### Frontend

* React (Vite)
* Axios

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## Features

* 📁 Create, view, and delete projects
* 🧩 Add tasks to projects
* 🔄 Update and delete tasks
* 📊 Task filtering by status (todo, in-progress, done)
* 📅 Sort tasks by due date
* 📄 Pagination for projects
* ✅ Input validation
* ⚠️ Centralized error handling

---

## Database Schema

### Projects Table

| Field       | Type      |
| ----------- | --------- |
| id          | SERIAL    |
| name        | TEXT      |
| description | TEXT      |
| created_at  | TIMESTAMP |

### Tasks Table

| Field       | Type      |
| ----------- | --------- |
| id          | SERIAL    |
| project_id  | INTEGER   |
| title       | TEXT      |
| description | TEXT      |
| status      | TEXT      |
| priority    | TEXT      |
| due_date    | DATE      |
| created_at  | TIMESTAMP |

---

##  API Endpoints

### Project APIs

* `POST /projects` → Create project
* `GET /projects` → Get all projects (with pagination)
* `GET /projects/:id` → Get single project
* `DELETE /projects/:id` → Delete project

---

### Task APIs

* `POST /projects/:project_id/tasks` → Create task
* `GET /projects/:project_id/tasks` → Get tasks for a project
* `PUT /tasks/:id` → Update task
* `DELETE /tasks/:id` → Delete task

---

## Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/project-management-system.git
cd project-management-system
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=project_manager
DB_HOST=localhost
DB_PORT=5432
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Database Setup

Run the following SQL in PostgreSQL:

```sql
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT CHECK (status IN ('todo', 'in-progress', 'done')) DEFAULT 'todo',
    priority TEXT CHECK (priority IN ('low', 'medium', 'high')) DEFAULT 'medium',
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```




This project is for educational purposes.
