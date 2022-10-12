const request = require("supertest");
const host = require("../config/config.json");
const input_card = require("../testdata/inputTestData.json");

jest.useFakeTimers("legacy");
describe("Checkout", () => {
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
        organizationId = response.body.organization.id;
        console.log(organizationId);
        console.log(token);
        done();
      });
  });
  test("Should repsonde with a 201 status code", async () => {
    const response = await request(host.baseURL)
      .post(host.checkout)
      .set("Authorization", `Bearer ${token}`)
      .set("organization_id", organizationId)
      .send({
        customer: {
          firstName: input_card.customer.firstName,
          lastName: input_card.customer.lastName,
          email: input_card.customer.email,
          card: {
            cardNumber: input_card.visaCardNumberMP.VisaCardNumber,
            cardHolder: {
              name: input_card.visaCardNumberMP.name,
              identification: {
                value: "",
                type: "",
              },
            },
            securityCode: input_card.visaCardNumberMP.securityCode,
            expiration: {
              month: input_card.visaCardNumberMP.month,
              year: input_card.visaCardNumberMP.year,
            },
          },
        },
        prices: [
          {
            id: "9af126f7-3669-4fbc-8d11-b0d89975c3ec",
            quantity: 1,
          },
        ],
      });
    message = response.body.message;
    console.log(message);
    expect(response.statusCode).toBe(201);
  });
});
