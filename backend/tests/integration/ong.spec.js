const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(() => {
        connection.destroy();
    })

    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "CASO TESTE *****",
            email: "contato@ong.com",
            whatsapp: "0000000000",
            city: "Tubarão",
            uf: "SC"
        });

        console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});