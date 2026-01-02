const express = require("express");
const cors = require("cors");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
