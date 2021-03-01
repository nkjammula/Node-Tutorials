const Logger = require("./logger");

// This won't trigger the above event emitter. since we are using two different event emitter classes in event.js and logger.js
const logger = new Logger();
// Register a listener
logger.on("messageLogged", function (eventArgs) {
  console.log("Listener called", eventArgs);
});
logger.log("message");

// Raise: logging (data:message)
