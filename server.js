//I refered to a few class exercises 14.3, in particular 17-CatsApp

// DEPENDENCIES

var express = require("express");

// EXPRESS CONFIGURATION

var app = express();


// Sets an initial port. 

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// LISTENER
// The below code effectively "starts" server

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
  
});