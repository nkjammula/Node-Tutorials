const fileSystem = require("fs");
// const files = fileSystem.readdirSync("./");
// console.log(files);

// there are two methods in pairs sync and async methods. always prefer to use async methods.
fileSystem.readdir("./", function (err, files) {
  if (err) console.log("error", err);
  else console.log("Result", files);
});
