var express = require("express"),
app = express()
app.set("view engine", "ejs")

app.get("/", function(req, res){
	res.render("index")
})

app.listen(5004, function(){
console.log("App on PORT 5004")
})
