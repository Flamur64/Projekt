import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

let tasksData = []

app.get("/", (req, res) => {
  res.send('<a href="/anmeldung">Zur Anmeldung</a>')
})

app.get("/anmeldung", function (req, res) {
  res.sendFile("anmeldung.html", { root: "./" })
})

app.get("/tasks", function (req, res) {
  res.sendFile("tasks.html", { root: "./" })
})

app.post("/anmeldung", function (req, res) {
  const { name, password } = req.body
  if (name === "gruppe5" && password === "12345") {
    res.redirect("/tasks")
  } else {
    res.send("Anmeldung fehlgeschlagen.")
  }
})

app.listen(port, function () {
  console.log("Server listening on port: " + port)
})