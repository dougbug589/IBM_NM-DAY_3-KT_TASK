import React, { useEffect, useState } from "react";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const API_URL = "http://localhost:3000";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API_URL}/students`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <main className="dashboard">
      <h1>Students Management</h1>
      <p>Total Students: {students.length}</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dept}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Dashboard;