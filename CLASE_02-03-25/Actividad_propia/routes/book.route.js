const express = require("express");
const router = express.Router();
const { getBooks } = require("../controllers/book.controller");

router.get("/", getBooks);
// router.get("/uno", getBooks);
// router.get("/dos", getBooks);

module.exports = router;