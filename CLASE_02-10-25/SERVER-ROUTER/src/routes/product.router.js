const express = require("express");
const { getAllProducts } = require("../controllers/product.controller");
const router = express.Router();

router.get("/", getAllProducts);

function getAll(text) {
  try {
    // ......
    var products = [];
    return {
      success: true,
      products,
    };
  } catch (error) {}
}
router.get("/", (req, res) => {
    const products = getAll(req.query.text)
});

module.exports = router;

/*

linea 2 -> router -> { metodos }

router -> { ...metodos, get:{path}}

*/
