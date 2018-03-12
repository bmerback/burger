const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

