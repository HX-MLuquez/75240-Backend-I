const express = require("express");
const app = express();
const routes = require("./routes"); // index.js
// const routesProducts = require("./routes/product.router"); // index.js


app.use(express.json()) // {} por body es de lectura



app.get("/", (req, res) => {
  res.json({ API: "BACKEND - ROUTER", break: "a las 21:15 volvemos" });
});

app.use("/api", routes)




// app.use("/api", routes)


module.exports = app

