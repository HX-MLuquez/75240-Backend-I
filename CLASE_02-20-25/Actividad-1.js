const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const list_products = [];
let total = 0
objetos.forEach((element) => {
  // console.log(element)
  const listasObject = Object.keys(element)
  listasObject.forEach((prod) => {
    console.log(prod);
    if (!list_products.includes(prod)) {
      // TRUE
      list_products.push(prod);
    }
  });

  Object.values(element).forEach(v=>{
    total += v
  })
});
console.log(list_products);
console.log(total);
