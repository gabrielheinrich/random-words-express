const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser")

const db = {
  words: ["javascript", "python", "php"]
}
const app = express();

// Configuration
// MIDDLEWARES
app.use(logger("dev"))

app.use(cors())

// CONTROLLERS
app.get("/hello", (request, response) => {
  response.send({response: "Hello"})
})

app.get("/words/random", (request, response) => {
  const randomIndex = Math.floor(Math.random() * db.words.length)
  const word = db.words[randomIndex];
  response.send({ word });
})

app.post("/words", (request, response) => {
  console.log(request.body);
})

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000")
})