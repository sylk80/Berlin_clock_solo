
const app = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

describe('Berlin clock Endpoints', () => {

    it('POST /clock should return errormessage', async () => {
        const res = await requestWithSupertest.post('/clock').send({}).accept('json');
        expect(res.status).toEqual(400);
    });
    it('POST /clock should return error message string', async () => {
        const res = await requestWithSupertest.post('/clock').send({}).accept('json');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
    });
    it('POST /clock should return error message string', async () => {
        const res = await requestWithSupertest.post('/clock').send({}).accept('json');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error');
    });
    it('POST /clock should return error message string with value', async () => {
        const res = await requestWithSupertest.post('/clock').send({}).accept('json');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual("Input time is required")
    });
    it('POST /clock should return different error message string with time value', async () => {
        const res = await requestWithSupertest.post('/clock').send({"time":"123"}).accept('json');
        expect(res.status).toEqual(400);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('error');
        expect(res.body.error).toEqual("Time required in HH:mm:ss format")
    });
});