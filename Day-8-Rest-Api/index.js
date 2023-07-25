const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const Port = 5400;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("homepage");
});
app.get("/api/users", (req, res) => {
  res.send(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userWithId = users.find((user) => user.id === id);
  if (!userWithId) {
    return res.status(404).json({ error: "User not found." });
  }
  return res.json(userWithId);
});
app.post("/api/adduser", (req, res) => {
  const data = req.body;
  console.log(data, "data");
  const newUserId = users.length + 1;
  users.push({ ...data, id: newUserId });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to write to file." });
    }
    return res.json({data, message: "Data added successfully." });
  });
});
app.patch("/api/edituser/:id", (req, res) => {});
app.delete("/api/deleteuser/:id", (req, res) => {});

app.listen(Port, () => {
  console.log(`Server Runing on...... at Port: ${Port}`);
});
