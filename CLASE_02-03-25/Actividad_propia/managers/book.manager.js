const books = require("../db/books.json");

const getAllBooks = () => {
    return books.length ? books : null
};

module.exports = { getAllBooks };

//* Managers son conectores directos con la DB

//* SQL  no SQL  QUERIES (CONSULTAS) -> a la DB