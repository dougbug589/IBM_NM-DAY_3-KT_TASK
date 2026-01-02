const express = require("express");
const router = express.Router();

let students = [
  { id: 1, name: "Karthick Kumar", dept: "IT", age: 21 },
  { id: 2, name: "Saranya", dept: "IT", age: 21 }
];

router.get("/", (req, res) => {
  res.json(students);
});

router.post("/", (req, res) => {
  const { name, dept, age } = req.body;

  const newId = students.length ? students[students.length - 1].id + 1 : 1;

  const newStudent = {
    id: newId,
    name,
    dept,
    age
  };

  students.push(newStudent);

  res.json({
    message: "Student added successfully",
    students
  });
});

router.post("/bulk", (req, res) => {
  const newStudents = req.body;

  newStudents.forEach(student => {
    const newId = students.length ? students[students.length - 1].id + 1 : 1;
    students.push({
      id: newId,
      ...student
    });
  });

  res.json({
    message: "Multiple students added",
    students
  });
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { id: newId, name, dept, age } = req.body;

  if (newId !== id) {
    const idExists = students.some(student => student.id === newId);
    if (idExists) {
      return res.status(400).json({ message: "ID already exists. Please provide a unique ID." });
    }
  }

  students = students.map(student =>
    student.id === id
      ? {
          ...student,
          id: newId || student.id,
          name: name || student.name,
          dept: dept || student.dept,
          age: age || student.age
        }
      : student
  );

  res.json({
    message: "Student updated successfully",
    students
  });
});

router.put("/", (req, res) => {
  const updates = req.body;

  updates.forEach(update => {
    students = students.map(student =>
      student.id === update.id
        ? { ...student, ...update }
        : student
    );
  });

  res.json({
    message: "Multiple students updated",
    students
  });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student deleted successfully",
    students
  });
});

router.delete("/", (req, res) => {
  const idsToDelete = req.body;

  students = students.filter(
    student => !idsToDelete.includes(student.id)
  );

  res.json({
    message: "Multiple students deleted",
    students
  });
});

module.exports = router;
