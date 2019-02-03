var express = require("express"),
	app = express(),
	http = require("http").Server(app).listen(80),
	upload = require("express-fileupload");
app.use(upload())


