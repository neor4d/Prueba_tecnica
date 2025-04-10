import request from 'supertest';
import app from '../../app.js';

//const request = testServer(pizzas);

describe("Pizza routes", () => {

    it("GET /api/pizzas debería retornar todas las pizzas", async () => {
        //Patrón triple A: Arrange, Act and Assert, este es para test

        // Arrange
        const expectedStatus = 200;

        // Act
        const response = await request(app).get('/api/pizzas');

        // Assert
        expect(response.status).toBe(expectedStatus);
        expect(Array.isArray(response.body)).toBe(true);

    })

    it("GET /api/pizzas:id debería retornar las pizzas por nombre", async () => {

        // Arrange
        const pizzaName = "Margherita";
        const expectedStatus = 200;

        // Act
        const response = await request(app).get(`/api/pizzas/${pizzaName}`);

        // Assert
        expect(response.status).toBe(expectedStatus);
        expect(response.body).toHaveProperty('name', pizzaName);

    })

});