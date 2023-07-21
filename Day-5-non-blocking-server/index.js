const http = require("http");
const fs = require("fs");
const { formattedDateTime } = require("./time");
// const RequestedData = require("./data");
const port = 8080;
const server = http
  .createServer((req, res) => {
    const Clinturl = req.url;
    const Clintip = req.socket.remoteAddress.includes("::")
      ? "127.0.0.1"
      : req.socket.remoteAddress;
    // data save in a object------------------------------------------------>
    // const requestDataObject = {
    //   timestamp: formattedDateTime,
    //   ip: Clintip,
    //   url: Clinturl,
    // };
    // // Push the request data to the requestData array
    // RequestedData.push(requestDataObject);

    // Non - Blocking- threads-> if I use Sync then blocking threads------>
    fs.appendFile(
      "./data.txt",
      `new req at: ${formattedDateTime} - from Ip: ${Clintip} - url: ${Clinturl}` +
        "\n",
      (err, data) => {
        res.end("Server Connected");
      }
    );
  })
  .listen(port, () => {
    console.log(`Server runing on ${port}..........`);
  });
