const host = require("../config/config.json");
const input = require("../testdata/signupTestData.json");
const request = require("supertest");

describe("Post Sign up", () => {
  describe("Given a name and alias", () => {});

  describe("When user data is missing", () => {
    test("Should respond with a 400 status code", async () => {
      const fields = [
        input.signup_whitoutUsers,
        input.signup_whitoutPasswordUsers,
        input.signup_whitoutMailUsers,
      ];

      for (const body of fields) {
        const response = await request(host.baseURL)
          .post("auth/merchant/signup")
          .send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
