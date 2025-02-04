/*
* Consigna
Crear una clase llamada ProductManager que gestione un conjunto de productos.

* Aspectos a Incluir
La clase debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

* Cada producto gestionado debe contar con las siguientes propiedades:
- title (nombre del producto)
- description (descripción del producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas disponibles)


* Métodos a Implementar
- addProduct
Este método debe agregar un producto al arreglo de productos inicial.
Debe validar que no se repita el campo code y que todos los campos sean obligatorios.
Al agregar un producto, debe crearse con un id autoincrementable.

- getProducts
Este método debe devolver el arreglo con todos los productos creados hasta el momento.

- getProductById
Este método debe buscar en el arreglo el producto que coincida con el id.
En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found".
*/

class ProductManager {
  constructor() {
    this.products = [];
    this.currentId = 1; // ID autoincrementable
  }

  /**
   * Valida que todos los campos sean obligatorios y que el código no esté duplicado.
   * @param {Object} product
   */
  validateProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;

    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error("Todos los campos son obligatorios.");
    }

    if (this.products.some((p) => p.code === code)) {
      throw new Error(`El código '${code}' ya está en uso.`);
    }
  }

  /**
   * Agrega un producto al arreglo.
   * @param {Object} product
   */
  addProduct(product) {
    this.validateProduct(product);

    const newProduct = {
      id: this.currentId++, // Genera un ID autoincrementable
      ...product,
    };

    this.products.push(newProduct);
    console.log(`Producto agregado:`, newProduct);
  }

  /**
   * Devuelve todos los productos.
   * @returns {Array} Productos existentes.
   */
  getProducts() {
    return this.products;
  }

  /**
   * Busca un producto por su ID.
   * @param {number} id
   * @returns {Object} Producto encontrado.
   */
  getProductById(id) {
    const product = this.products.find((p) => p.id === id);

    if (!product) {
      console.error("Not found");
      return "Not found";
    }

    return product;
  }
}

// Ejemplo de uso
try {
  const manager = new ProductManager();

  // Agregar productos
  manager.addProduct({
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 100,
    thumbnail: "/img/producto1.png",
    code: "abc123",
    stock: 10,
  });

  manager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 200,
    thumbnail: "/img/producto2.png",
    code: "def456",
    stock: 5,
  });

  // Obtener todos los productos
  console.log("Productos actuales:", manager.getProducts());

  // Obtener producto por ID
  console.log("Producto con ID 1:", manager.getProductById(1));
  console.log("Producto con ID 99:", manager.getProductById(99)); // "Not found"
} catch (error) {
  console.error("Error:", error.message);
}
