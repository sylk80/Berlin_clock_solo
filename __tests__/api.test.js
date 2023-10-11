
const server = require('../index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('Berlin clock Endpoints', () => {

    it('GET /clock should return berloiclock', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('clock')
    });

});