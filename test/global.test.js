let app = require("../src/app");
let supertest = require('supertest');
let request = supertest(app);

test("A aplicação deve responder na porta 3001", async () => {

  return request.get("/").then(res => expect(res.statusCode).toEqual(200));

});

test("Deve retornar a mensagem de Bem Vindo", () => {

  return request.get("/home").then(res => expect(res.body.msg).toEqual("Bem vindo"));
});