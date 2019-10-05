var express = require("express");
var addAPIRoutes = require("./app/routing/apiRoutes");
var addHTMLRoutes = require("./app/routing/htmlRoutes");

var app = express();

var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

addAPIRoutes(app);
addHTMLRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});