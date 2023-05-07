const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to my app");
});

app.listen(3000, () => {
  console.log("listing on port 3000");
});
