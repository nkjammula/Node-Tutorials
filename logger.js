const EventEmitter = require("events");
// below variables are scoped to this file or module.
// to use these variables in different files, we need make them public by exporting.
console.log(__dirname);
console.log(__filename);
var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // send an http request
    console.log("log message", message);
    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
