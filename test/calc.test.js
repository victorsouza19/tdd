let calc = require("../src/calc");


describe("Operações matemáticas", () => {
  test("Deve retornar o valor 10 ao somar 5 + 5 ", () => {

    let result = calc.sum(5,5);
    expect(result).toEqual(10);
  
  });
  
  test("Deve retornar o valor 50 ao multiplicar 10 x 5", () => {
  
    let result = calc.mult(10, 5);
    expect(result).toEqual(50);
  
  });
  
  test("Deve retornar o valor 5 ao subtrair 15 - 10", () => {
  
    let result = calc.sub(15, 10);
    expect(result).toEqual(5);
  
  });
  
});
