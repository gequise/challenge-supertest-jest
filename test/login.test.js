const supertest = require('supertest');
const host = 'https://api.rebill.dev/'
const request = supertest(host)

const alias = 'gustavoequise'
describe('Sign in', () => {
    it('Sign in app', async () => {
    const response = await request.post('v2/auth/login/'+ alias).send({
        email: 'gustavo@rebill.to', password: 'Password123!'
    });
    expect(response.statusCode).toBe(201);
    });
});