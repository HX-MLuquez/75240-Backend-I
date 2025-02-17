const express = require("express");
const router = express.Router();
const productsRouter = require("./product.router")
const usersRouter = require("./product.router")

router.use("/products", productsRouter)
router.use("/users", usersRouter)

module.exports = router