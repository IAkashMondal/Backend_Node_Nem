const express = require("express");
const users = require("./MOCK_DATA.json");
const Port = 5400 ;
const app = express();
app.use(express.json());
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

app.listen(Port, () => {
  console.log(`Server Runing on...... at Port: ${Port}`);
});
