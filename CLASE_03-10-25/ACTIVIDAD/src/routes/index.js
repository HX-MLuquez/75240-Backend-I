const express = require('express');
const router = express.Router();

//! *** *** ***
const usuarioRouter = require("./usuarioRoutes")

router.use("/usuarios", usuarioRouter)

module.exports = router;