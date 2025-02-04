const { getAllBooks } = require("../managers/book.manager");

const getBooks = (req, res) => {
  try {
    const allBooks = getAllBooks(); // usa el Manager
    if (allBooks) {
      res.status(200).json(allBooks);
    } else {
      res.status(400).send("No se encontraron libros");
    }
  } catch (error) {
    console.error("Error al obtener los libros:", error);
    res.status(500).send("Error interno del servidor");
  }
};

module.exports = { getBooks };
