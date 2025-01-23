
// Promise CLASS       el Promise |
var miPromesa1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Bien bien bien");
    } else {
      reject(Error("Algo salió mal"));
    }
  }, 1000);
});
console.log(miPromesa1);
// Promise { <pending> }


miPromesa1.then((res)=>{
  console.log(res);
  // otra promesa 
  return `nueva data + ${res}`
}).then((resB)=>{
  console.log(resB);
  // otra promesa 
}).catch((error)=>{
  console.log(`error ${error}`)
})