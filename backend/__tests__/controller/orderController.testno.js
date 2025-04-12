import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';

// 1. Mock de las dependencias
const mockOrdersModel = {
  readOrders: jest.fn(() => []),
  writeOrders: jest.fn()
};

const mockValidator = {
  validationResult: jest.fn(() => ({
    isEmpty: () => true,
    array: () => []
  }))
};

// 2. Mockear los módulos
jest.unstable_mockModule('../../model/ordersModel.js', () => mockOrdersModel);
jest.unstable_mockModule('express-validator', () => mockValidator);

// 3. Importar dinámicamente después de mockear
const { createOrder, getOrders } = await import('../../controller/orderController.js');

describe('Order Controller', () => {
  let app;
  
  const mockOrder = {
    customerName: "John Doe",
    items: [
      { name: "Margherita", quantity: 2, unitPrice: 10 }
    ]
  };

  beforeEach(() => {
    app = express();
    app.use(express.json());
    app.post('/order', createOrder);
    app.get('/order', getOrders);
    
    jest.clearAllMocks();
    mockOrdersModel.readOrders.mockImplementation(() => []);
  });

  describe('createOrder', () => {
    it('debería crear una orden exitosamente', async () => {
      mockValidator.validationResult.mockReturnValue({
        isEmpty: () => true,
        array: () => []
      });

      const response = await request(app)
        .post('/order')
        .send(mockOrder)
        .expect(201);

      expect(response.body).toMatchObject({
        OrderID: expect.any(Number),
        customerName: mockOrder.customerName,
        totalPrice: 20 // 2 * 10
      });
      expect(mockOrdersModel.writeOrders).toHaveBeenCalledTimes(1);
    });

    it('debería fallar si faltan datos', async () => {
      mockValidator.validationResult.mockReturnValue({
        isEmpty: () => false,
        array: () => [{ msg: 'Error de validación' }]
      });

      const response = await request(app)
        .post('/order')
        .send({}) // Datos vacíos
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });
  });

  describe('getOrders', () => {
    it('debería devolver todas las órdenes', async () => {
      const testData = [{ OrderID: 1, customerName: "Test", items: [], totalPrice: 0 }];
      mockOrdersModel.readOrders.mockReturnValue(testData);

      const response = await request(app)
        .get('/order')
        .expect(200);

      expect(response.body).toEqual(testData);
    });

    it('debería devolver array vacío si no hay órdenes', async () => {
      mockOrdersModel.readOrders.mockReturnValue([]);

      const response = await request(app)
        .get('/order')
        .expect(200);

      expect(response.body).toEqual([]);
    });
  });
});