const fs = require("fs");
const input = process.argv;

// conditons------------------->
// to add , cmd node index.js add file name 'sms'
if (input[2] === "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid credentials");
}
