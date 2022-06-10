const supertest = require('supertest');
const host = 'https://api.rebill.dev/v2/'
const request = supertest(host)

const alias = 'gustavoequise'

let token;
beforeAll((done) => {
    request
    .post('auth/login/'+ alias)
    .send({
        email: 'gustavo@rebill.to',
        password: 'Password123!',
    })
    .end((err, response)=> {
        if (err) throw err;
        token = response.body.authToken;
        console.log(token);
        done();
    });
});

describe('Create an item', () => {
    test('Create an item', async () => {
    const response = await request.post('item')
    .send(
        {"prices":[
               {
                  "frequency":{
                     "type":"days",
                     "quantity":6
                  },
                  "repetitions":2,
                  "currency":"ARS",
                  "gatewayId":"5c0a3c30-28ea-4ca2-a1ba-32add6fea6c8",
                  "amount":"200",
                  "type":"fixed"
               }
            ],
            "name":"Item01",
            "description":"Test Description"
         })
    .set('Authorization', `Bearer ${token}`);
    
    expect(response.statusCode).toBe(201);
    });
});