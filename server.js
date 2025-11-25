const express = require("express");
const app = express();
app.use(express.json());

let students = [];

// Create student
app.post("/students", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added" });
});

// Get all students
app.get("/students", (req, res) => {
  res.json(students);
});

// Get one student
app.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const result = students.find(s => s.id == id);
  res.json(result || { message: "Not found" });
});

// Update student
app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  students = students.map(s => s.id == id ? req.body : s);
  res.json({ message: "Student updated" });
});

// Delete student
app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  students = students.filter(s => s.id != id);
  res.json({ message: "Student deleted" });
});

if (require.main === module) {
  app.listen(3000, () => console.log("Running on 3000"));
}

module.exports = app;
