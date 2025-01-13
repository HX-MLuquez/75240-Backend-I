let prop = "36B";

const obj = {
  a: 1,
  prop: "jijiji",
  b: { prop: 444 },
  // fufu: function(){
  //     return this.prop
  // }
};

obj.fufu = function () {
  return this.b.prop;
};

console.log(obj.fufu());

console.log(this.prop);
