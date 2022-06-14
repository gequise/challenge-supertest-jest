const supertest = require('supertest');
const host = 'https://api.rebill.dev/'
const request = supertest(host)

const alias = 'gustavoequise'
describe('Post Sign in', () => {
    test('When the user enter credentials valid', async () => {
    const response = await request.post('v2/auth/login/'+ alias)
    .send({
        email: 'gustavo@rebill.to', password: 'Password12!'
    });
    expect(function(res) {
        if(res.status != statusCode){
          message = response.body.message;
          console.log(message);
         }
      })
    expect(response.statusCode).toBe(201);
    });
});
