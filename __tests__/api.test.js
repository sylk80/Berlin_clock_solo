
const app = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

describe('Berlin clock Endpoints', () => {

    it('POST /clock should return errormessage', async () => {
        const res = await requestWithSupertest.post('/clock').send({}).accept('json');
        expect(res.status).toEqual(400);
    });
/*    it('GET /clock should return json', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
    it('GET /clock should return clock', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('clock');
    });
    it('GET /clock should return clock string', async () => {
        const res = await requestWithSupertest.get('/clock');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body.clock).toEqual();
    });*/
});