var express = require("express"),
app = express()
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("index")
})

app.get("/about", function(res, res){
	res.render("about")
})

app.get("/standings", function(res, res){
	res.render("standings")
})

app.get("/players", function(res, res){
	res.render("players")
})

app.listen(5004, function(){
console.log("App on PORT 5004")
})
