const express = require("express");
const router = express.Router();
const books = require("./book.route");
/*
const express = require("express");
const router = express.Router();
const { getBooks } = require("../controllers/book.controller");

router.get("/", getBooks);

module.exports = router;
*/

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    `<div style='text-align: center; margin-top: 20%; font-size: 2em; font-family: Arial;'>
    <h1>¡Bienvenido a la API de libros!</h1>
    <p>Para ver los libros, ve a <a href="http://localhost:8080/api/books">/books</a></p>
    </div>`
  );
});

router.use("/api/books", books);

module.exports = router;
