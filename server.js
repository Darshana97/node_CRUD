require("./models/db");

const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const employeeController = require("./controllers/employeeController");

var app = express();

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

app.listen(5300, () => {
  console.log("Express server started at port : 5300");
});

app.use("/employee", employeeController);
