const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const { watchman } = require("./MiddleWare/watchman.middleware");
const Port = 5400;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(watchman);
app.get("/", (req, res) => {
  res.send(`Home Page`);
});
// To Fetch all users From The Api---------------------------------------------------------------> 1

app.get("/api/users", (req, res) => {
  res.send(users);
});
// To Fetch particular User with ID From the Api-------------------------------------------------> 2

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const userWithId = users.find((user) => user.id === id);
  if (!userWithId) {
    return res.status(404).json({ error: "User not found." });
  }
  return res.json(userWithId);
});
// To add User in Api ---------------------------------------------------------------------------> 3

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
    return res.json({ data, message: "Data added successfully." });
  });
});
// To Edit the deatils of th users---------------------------------------------------------------> 4

app.patch("/api/edituser/:id", (req, res) => {
  const dataToUpdate = req.body || {};
  const paramsID = Number(req.params.id);
  // search id presenet or not---->
  let userDeatils = users.find((user) => user.id === paramsID);

  if (!userDeatils) {
    return res.json({message:"User not Found"});
  } else {
    Object.assign(userDeatils, dataToUpdate);
      // users.push(...dataToUpdate);
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(404).json({ error: err });
        } else {
          res.status(200).json({ sucess: true, Updated_data: dataToUpdate });
        }
      });
  }
});

// To Delete The Particular user ----------------------------------------------------------------> 5

app.delete("/api/deleteuser/:id", (req, res) => {
  const paramsID = Number(req.params.id);
  // search id presenet or not---->
  let userDeatils = users.find((user) => user.id === paramsID);

  if (!userDeatils) {
    return res.json({message:"User not Found"});
  } else {
      const deletedUser = users.pop(userDeatils);
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(404).json({ error: err });
        } else {
          res.status(200).json({ sucess: true, "delete data": deletedUser});
        }
      });
  }
});

app.listen(Port, () => {
  console.log(`Server Runing on...... at Port: ${Port}`);
});
