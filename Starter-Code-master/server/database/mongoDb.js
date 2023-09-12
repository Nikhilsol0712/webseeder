const mongoose = require("mongoose");
const db_uri = require("../config/db.config");

function connect() {
  mongoose
    .connect(db_uri)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("there was some error", err);
    });
}

module.exports = connect;
