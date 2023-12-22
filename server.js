const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Straight from node GET method");
});

app.listen(3000, () => {
  console.log("Test");
});
