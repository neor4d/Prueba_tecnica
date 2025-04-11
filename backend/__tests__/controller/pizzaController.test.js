import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';

//import { readData } from '../../utils/jsonUtils.js';

// Mock de la función readData (Un mock es un objeto que imita funciones
// clases o modulos, es usado para hacer tests)
const mockReadData = jest.fn();
jest.unstable_mockModule('../../utils/pizzaUtils.js', () => ({
  readData: mockReadData
}));

import { getAllPizzas, getPizzaByName } from '../../controller/pizzaController.js';
//import { readData } from '../../utils/jsonUtils.js';

describe('Test para pizza Controller', () => {

    let app;
    // Se crea una constante con los datos que tengo en el archivo JSON
    const mockData = [
        { name: "Margherita", price: 5, ingredients: ["tomato", "mozzarella"] },
        { name: "Bufala", price: 6, ingredients: ["tomato", "mozarella di bufala"] },
        { name: "Romana", price: 5, ingredients: ["tomato", "mozzarella", "anchovies", "oregano", "oil"] },
        { name: "Diavola", price: 7.5, ingredients: ["tomato", "mozzarella", "spicy salami"] },
        { name: "Pizza Bianca", price: 5, ingredients: ["mozzarella", "oregano"] }
    ];
    
    beforeEach(() => {

        // Se crea una nueva instancia de la app para cada test
        app = express();
        app.use(express.json());
        
        // Configurar rutas
        app.get('/pizzas', getAllPizzas);
        app.get('/pizzas/:name', getPizzaByName);

        // Reinicia los mocks antes de cada prueba para asegurar que no hayan errores
        jest.clearAllMocks();
    });

    //Prueba para que devuelva todas las pizzas
    it('Debería devolver todas las pizzas', async () => {

        // Arrange
        mockReadData.mockResolvedValue(mockData);

        // Act
        const response = await request(app).get('/pizzas');

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData);
    });

    // Prueba para que solo devuelva las pizzas por nombre
    it('Debería devolver una pizza por nombre', async () => {

        // Arrange
        mockReadData.mockResolvedValue(mockData);

        // Act
        const response = await request(app).get('/pizzas/Margherita');

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual(mockData[0]);
    });

    // Prueba para verificar que la pizza exista
    it('Debería devolver 404 si la pizza no se encuentra', async () => {

        // Arrange
        mockReadData.mockResolvedValue(mockData);

        //Act
        const response = await request(app).get('/pizzas/Vegetariana');

        //Assert
        expect(response.status).toBe(404);
        expect(response.body).toEqual({ error: "Pizza no encontrada" });
    });

});