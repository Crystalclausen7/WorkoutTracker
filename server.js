var express = require("express")
var app = express()
var path = require("path")
var htmlRoutes = require("./routes/htmlRoutes")
var PORT = 8080

app.use(express.static("public"))

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

// app.get("/", function (req, res) {
//     console.log("the route works")
//     res.sendFile(path.join(__dirname, "./public", "index.html"))
// })

// app.get("/exercise", function (req, res) {
//     console.log("exercise")
//     res.sendFile(path.join(__dirname, "./public", "exercise.html"))
// })

// app.get("/stats", function (req, res) {
//     console.log("stats")
//     res.sendFile(__dirname, "../public", "stats.html")
// })

app.use(htmlRoutes)

app.listen(PORT, function () {
    console.log("LISTENING ON " + PORT)
})