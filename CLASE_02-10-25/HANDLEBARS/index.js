const express = require("express");
const app = express();

const handlebars = require("express-handlebars");
const path = require("path");

const PORT = 8080;

//* SETEO handlebars
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

//* Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // DATA FORM {} {...}

//* Static
//* Todos nuestros archivos ESTATICOS (html, css, img, etc)
// que se encuentran en la carpeta 'public' sen van a servir en /static
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  return res.json({ APP: "HANDLEBARS" });
});

app.get("/user", (req, res) => {
  const { nombre, id } = req.query;
  const context = {
    nombre,
    id,
  };
  let isValidate = id === "1234";
  if (isValidate) return res.render("index", context);
  else return res.render("not_found_user", context);
});

const users = []

app.post("/user", (req, res) => {
  try {
    const {nombre,edad,email} = req.body;
    if(!nombre || !edad || !email){
      return res.status(400).send("Faltan datos para crear el usuario")
    }

    const user = {
      nombre,
      edad,
      email
    }
    users.push(user)
    res.status(200).send("usuario creado con éxito")

    
  } catch (error) {
    
  }


 
});

app.get("/admin/:code", (req, res) => {});
const products = [
  { id: 1, title: "Producto 1", price: 100 },
  { id: 2, title: "Producto 2", price: 200 },
  { id: 3, title: "Producto 3", price: 300 },
];
app.get("/products", (req, res) => {
  const context = {
    products,
  };
  return res.render("products", context);
});

app.get("/astucia/:message", (req, res) => {
  const { message } = req.params;
  console.log(message);
  const context = {
    message,
  };
  return res.render("astucia", context);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
