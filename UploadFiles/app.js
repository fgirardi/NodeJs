var express = require("express"),
	app = express(),
	http = require("http").Server(app).listen(80),
	upload = require("express-fileupload");
app.use(upload())

console.log("Server Starded :)")

app.get("/",function(req, res) {

	res.sendFile(__dirname + "index.html");


})

app.post("/", function(req, res) {

	if (req.files) {
	
		var file = req.files.filename;
		var filename = req.files.name;

		file.mv("./upload" + filename, function(err) {
		
			if(err) {
				
				console.log(err);
				res.send("Error occured");
			
			} else {
			
				res.send("Done");

			}

		})
	}
})


