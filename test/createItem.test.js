const request = require("supertest");
const host = require("../config/config.json");
const input_item = require("../testdata/inputItemTestData.json");

jest.useFakeTimers("legacy");
describe("Create a Item", () => {
  let token;
  beforeAll((done) => {
    request(host.baseURL)
      .post(host.login)
      .send({
        email: host.email,
        password: host.password,
      })
      .end((err, response) => {
        if (err) throw err;
        token = response.body.authToken;
        console.log(token);
        done();
      });
  });
  test("Should repsonde with a 201 status code", async () => {
    const response = await request(host.baseURL)
      .post(host.item)
      .send(input_item.item01)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(201);
    item = response.body.item;
    console.log(item);
  });
});
