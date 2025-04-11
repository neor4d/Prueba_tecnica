import { beforeEach, describe, expect, it } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import { createOrder, getOrders } from '../../controller/orderController.js';
import { readOrders, clearMocks } from '../mocks/ordersModel.mock';

// Se configura la app para el test
const app = express();
app.use(express.json());
app.post('/orders', createOrder);
app.get('/orders', getOrders);

describe('Orders Controller', () => {
    beforeEach(() => {
        clearMocks(); // Limpia los mocks antes de cada prueba
    });

    describe('createOrder', () => {
        it('debería crear una nueva orden', async () => {
            const mockOrder = {
                customerName: "John Doe",
                items: [
                    { name: "Margherita", quantity: 2, unitPrice: 10 },
                    { name: "Pepperoni", quantity: 1, unitPrice: 12 }
                ]
            };

            const response = await request(app)
                .post('/orders')
                .send(mockOrder)
                .expect(201);

            expect(response.body).toHaveProperty('OrderID');
            expect(response.body.customerName).toBe(mockOrder.customerName);
            expect(response.body.items.length).toBe(mockOrder.items.length);
            expect(response.body.totalPrice).toBe(32); // 2 * 10 + 1 * 12
        });

        it('debería devolver error 400 si faltan datos', async () => {
            const testCases = [
                { 
                    description: "sin customerName",
                    data: { items: [{ name: "Margherita", quantity: 1, unitPrice: 10 }] },
                    expectedError: /Faltan datos en la solicitud/i
                },
                { 
                    description: "sin items",
                    data: { customerName: "John Doe" },
                    expectedError: /Faltan datos en la solicitud/i
                },
                { 
                    description: "items vacío",
                    data: { customerName: "John Doe", items: [] },
                    expectedError: /Faltan datos en la solicitud/i
                }
            ];

            for (const { description, data, expectedError } of testCases) {
                const response = await request(app)
                    .post('/orders')
                    .send(data)
                    .expect(400);

                expect(response.body).toMatchObject({
                    error: expect.stringMatching(expectedError)
                });
            }
        });

        it('debería manejar correctamente los errores de las validaciones', async () => {
            const invalidOrder = {
                customerName: "John Doe",
                items: [
                    { name: "", quantity: 0, unitPrice: -5 } // Datos inválidos
                ]
            };

            const response = await request(app)
                .post('/orders')
                .send(invalidOrder)
                .expect(400);

            expect(response.body).toHaveProperty('errors');
            expect(response.body.errors.length).toBeGreaterThan(0);
        });
    });

    describe('getOrders', () => {
        it('debería devolver todas las ordenes', async () => {
            const mockData = [
                { OrderID: 1, customerName: "Test", items: [], totalPrice: 0 }
            ];
            readOrders.mockImplementationOnce(() => mockData);

            const response = await request(app)
                .get('/orders')
                .expect(200);

            expect(response.body).toEqual(mockData);
            expect(readOrders).toHaveBeenCalledTimes(1);
        });

        it('debería devolver un array vacío cuando no hay ordenes', async () => {
            readOrders.mockImplementationOnce(() => []); // Asegúrate de que devuelva un array vacío

            const response = await request(app)
                .get('/orders')
                .expect(200);

            expect(response.body).toEqual([]); // Verifica que la respuesta sea un array vacío
        });
    });
});