const cors = require('cors');
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/database.json');
var express = require("express");
var app = express();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/getCount", (req, res) => {
  var count = db.get("count")
  res.json({count: count})
})

app.get("/increment", (req, res, next) => {
  var count = db.get("count");
  var newCount = count + 1;
  db.set("count", newCount)
  res.sendStatus(200)
});


