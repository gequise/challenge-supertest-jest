const host = require("../config/config.json");
const input_data = require("../testdata/signupTestData.json");

const request = require("supertest");

describe("Post Sign up", () => {
  describe("Given a User and Password", () => {});

  describe("When alias data is missing", () => {
    test("Should respond with a 400. Name and alias are required.", async () => {
      const response = await request(host.baseURL)
        .post(host.signup)
        .send(input_data.signup_whitoutAlias);
      message = response.body.message;
      console.log(message);
      expect(response.statusCode).toBe(400);
    });

    test("Should respond with a 400. Name is required.", async () => {
      const response = await request(host.baseURL)
        .post(host.signup)
        .send(input_data.signup_whitoutNameAlias);
      console.log(response);
      message = response.body.message;
      console.log(message);
      expect(response.statusCode).toBe(400);
    });
    test("Should respond with a 400. Alias is required.", async () => {
      const response = await request(host.baseURL)
        .post(host.signup)
        .send(input_data.signup_whitoutAliasAlias);
      console.log(response);
      message = response.body.message;
      console.log(message);
      expect(response.statusCode).toBe(400);
    });
    test("Should respond with a 400. Name and alias are required.", async () => {
      const response = await request(host.baseURL)
        .post(host.signup)
        .send(input_data.signup_whitoutNameAndAlias);
      console.log(response);
      message = response.body.message;
      console.log(message);
      expect(response.statusCode).toBe(400);
    });
  });
});
