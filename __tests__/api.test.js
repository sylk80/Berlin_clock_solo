
const app = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

describe('Berlin clock Endpoints', () => {

    it('GET /clock should return berlinclock', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
    });
    it('GET /clock should return json', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });

});