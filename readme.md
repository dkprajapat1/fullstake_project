# 📝 Notes App

A full-stack notes management application built to simplify creating, organizing, and managing personal notes through a clean web interface.

The project focuses on implementing **CRUD operations, RESTful routing, MongoDB integration, server-side rendering, form validation, and safe data management** using the Node.js ecosystem.

## 🚀 Features

* ✍️ **Create Notes** — Add new notes with the required information.
* 📖 **View Notes** — Display saved notes through a structured interface.
* ✏️ **Edit Notes** — Update existing notes whenever required.
* 🗑️ **Delete Notes** — Remove individual notes from the database.
* ⚡ **Bulk Deletion** — Delete multiple notes with confirmation prompts to help prevent accidental data loss.
* ✅ **Form Validation** — Client-side validation to prevent invalid or incomplete submissions.
* 💾 **MongoDB Persistence** — Store and manage notes using MongoDB.
* 🔄 **RESTful Routing** — Handle application operations through Express.js routes.
* 🖥️ **Server-Side Rendering** — Render dynamic pages using EJS.

## 🛠️ Tech Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| **Node.js**    | Backend runtime           |
| **Express.js** | Server and routing        |
| **MongoDB**    | Database                  |
| **EJS**        | Server-side rendering     |
| **HTML5**      | Page structure            |
| **CSS3**       | Styling                   |
| **JavaScript** | Client-side functionality |

## 🏗️ Project Structure

```text
notes app/
│
├── models/          # Database models
├── routes/          # Application routes
├── views/           # EJS templates
├── public/          # Static assets
├── src/             # Application source files
├── img/             # Images/assets
│
├── server.js        # Application entry point
├── package.json     # Dependencies and scripts
└── README.md
```

## 🔄 Application Flow

```text
User
  │
  ▼
EJS / Frontend
  │
  ▼
Express.js Routes
  │
  ▼
Node.js Backend
  │
  ▼
MongoDB
```

User actions such as creating, editing, or deleting notes are handled by the Express.js backend and persisted in MongoDB.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/dkprajapat1/fullstake_project.git
```

### 2. Navigate to the project

```bash
cd "fullstake_project/notes app"
```

### 3. Install dependencies

```bash
npm install
```


### 4. Start the server

```bash
node server.js
```

Open the local URL provided by the server in your browser.

## 🎯 What I Learned

Through this project, I practiced:

* Building backend applications with **Node.js and Express.js**
* Designing and handling **CRUD operations**
* Working with **MongoDB** for persistent data
* Creating reusable server-rendered pages with **EJS**
* Structuring applications using routes and models
* Implementing input validation and safer destructive operations
* Connecting frontend interactions with backend APIs/routes

## 👨‍💻 Author

**Dinesh Kumar Prajapat**

* GitHub: [Github](https://github.com/dkprajapat1)
* LinkedIn: [Linkedin](https://www.linkedin.com/in/dineshkumarprajapat/)

---

⭐ If you find this project useful, consider giving the repository a star!
