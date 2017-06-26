var assert = ("assert");
function multiplicarNumeros(arr , num)
{

  var res = arr.reduce(function(total,actual){
    return total*actual;
  });
  if(!isNaN(num)){
    res = res * num;
  }
  return res;
}

describe("Ejercicio 1", function(){
  it("Prueba de [4,4,5,12] y 9", function(){
    assert.equal (8640, multiplicarNumeros([4,4,5,12], 9));
});
