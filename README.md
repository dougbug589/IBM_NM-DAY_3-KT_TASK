---

# CRUD Application – Day 3 Knowledge Transfer (KT) Task

## 1. Environment Setup

1. Installed **Node.js** for server-side JavaScript execution.
2. Used **npm** (comes with Node.js) to manage project dependencies.
3. Installed **Visual Studio Code** as the development environment.
4. Installed **Postman** to test backend API endpoints.
5. Created a dedicated project folder to organize frontend and backend files.

## 2. Backend Development

1. Created a backend directory.

2. Initialized the Node.js project using `npm init`.

3. Installed required dependencies: **Express** and **CORS**.

4. Created the server file: `server.js`.

5. Used `people.json` as a simple data storage file.

6. Implemented CRUD API endpoints:

   * **POST** – Add a new person
   * **GET** – Retrieve all people
   * **GET by ID** – Retrieve a specific person
   * **PUT** – Update an existing person
   * **DELETE** – Remove a person

7. Added helper functions to read from and write to the JSON file.

Backend server runs on port 3000.

## 3. API Testing Using Postman

* **POST** – Add new records
* **GET** – Retrieve all records
* **GET by ID** – Fetch a specific record
* **PUT** – Update an existing record
* **DELETE** – Remove a record

## 4. Frontend Development

1. Created a React project using Vite.
2. Designed a dashboard-style user interface.
3. Implemented input forms to add and update people.
4. Added a table to display the list of people.
5. Used React hooks (`useState`, `useEffect`) for state and data management.
6. Labeled each action with the corresponding HTTP method.

Frontend development server runs on port 5173.

## 5. Frontend–Backend Integration

* Adding a person sends a **POST** request.
* Loading the page triggers a **GET** request to fetch all records.
* Updating a record sends a **PUT** request.
* Deleting a record sends a **DELETE** request.

Backend responses dynamically update the frontend.

## 6. Final Output

* Add new people
* View all stored records
* Update existing records
* Delete records

The application features a modern dashboard and demonstrates frontend–backend communication using **RESTful APIs**.

---
