// server.js
const express = require("express");
const mongoose = require("mongoose");
const Order = require("./models/order");
const dotenv = require("dotenv");

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

// Conectar a la base de datos
async function main() {
  await mongoose.connect(MONGO_URI);

  console.log("Connected to MongoDB");

  // Cargar datos de prueba si no existen
  const count = await Order.countDocuments();
  if (count === 0) {
    await Order.insertMany([
      { name: "Pepperoni", size: "medium", price: 15, quantity: 5 },
      { name: "Margherita", size: "medium", price: 12, quantity: 8 },
      { name: "Hawaiian", size: "medium", price: 14, quantity: 3 },
      { name: "Pepperoni", size: "large", price: 18, quantity: 2 },
      { name: "Veggie", size: "medium", price: 13, quantity: 7 },
    ]);
    console.log("Sample data inserted");
  }

  // Configurar el servidor Express
  const app = express();
  app.use(express.json());

  // Ruta para obtener todas las órdenes
  app.get("/orders", async (req, res) => {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //* Aggregate
  // Ruta para obtener ventas totales por sabores de pizzas medianas
  app.get("/orders/medium-sales", async (req, res) => {
    try {
      //! ARMAR PIPELINE
      const pipeline = [
        { $match: { size: "medium" } }, // WHERE
        {
          $group: {
            _id: "$name",
            totalQuantity: { $sum: "$quantity" },
          },
        },
        { $sort: { totalQuantity: -1 } },
        {
          $project: {
            _id: 0,
            name: "$_id",
            totalQuantity: 1,
          },
        }
      ];

      // Obtener datos
      const sales = await Order.aggregate(pipeline);

      // Insertar en 'reports'
      //! Mostar el como usar $merge y el resultado en nuestra base de datos en la colección 'reports'
      await Order.aggregate([
        ...pipeline,
        {
          $merge: { // Nos crea nueva colección
            into: "reports",
            whenMatched: "merge",
            whenNotMatched: "insert",
          },
        },
      ]);

      res.json(sales);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  /*
  * Aggregate es una forma de realizar operaciones de agregación en MongoDB, es decir, podemos 
    realizar consultas más complejas que las que se pueden hacer con find().
  */

  // Iniciar el servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    console.log(`http://localhost:${PORT}/orders`);
    console.log(`http://localhost:${PORT}/orders/medium-sales`);
  });
}

main().catch((err) => console.error(err));

/*
Obtener todas las órdenes:
http://localhost:3000/orders
Obtener ventas totales de pizzas medianas:
http://localhost:3000/orders/medium-sales
*/

/*
* Obtener todas las órdenes:
[
  {
    "_id": "66c9d9943390013fd5187ef6",
    "name": "Pepperoni",
    "size": "medium",
    "price": 15,
    "quantity": 5,
    "date": "2024-08-24T13:01:08.187Z",
    "__v": 0
  },
  {
    "_id": "66c9d9943390013fd5187ef7",
    "name": "Margherita",
    "size": "medium",
    "price": 12,
    "quantity": 8,
    "date": "2024-08-24T13:01:08.187Z",
    "__v": 0
  },
  {
    "_id": "66c9d9943390013fd5187ef8",
    "name": "Hawaiian",
    "size": "medium",
    "price": 14,
    "quantity": 3,
    "date": "2024-08-24T13:01:08.188Z",
    "__v": 0
  },
  {
    "_id": "66c9d9943390013fd5187ef9",
    "name": "Pepperoni",
    "size": "large",
    "price": 18,
    "quantity": 2,
    "date": "2024-08-24T13:01:08.188Z",
    "__v": 0
  },
  {
    "_id": "66c9d9943390013fd5187efa",
    "name": "Veggie",
    "size": "medium",
    "price": 13,
    "quantity": 7,
    "date": "2024-08-24T13:01:08.188Z",
    "__v": 0
  }
]

* Obtener ventas totales de pizzas medianas:
[
]
*/
