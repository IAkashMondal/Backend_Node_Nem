const fs = require("fs");
const {formattedDateTime} = require("./time");
const input = process.argv;

// conditons------------------->
// to add , cmd node index.js add file name 'sms'
if (input[2] === "add") {
  const fileName = input[3];
  const newText = input[4] ;

  // Read the existing content of the file (if it exists).
  let existingContent = "";
  if (fs.existsSync(fileName)) {
    existingContent = fs.readFileSync(fileName, "utf8");
  }

  // Append the new text to the existing content, separated by a new line.
  const updatedContent = existingContent + "\n" + newText + " "+formattedDateTime;

  // Write the updated content back to the file.
  fs.writeFileSync(fileName, updatedContent);

  console.log("Text added successfully.");
} else if (input[2] === "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid credentials");
}
