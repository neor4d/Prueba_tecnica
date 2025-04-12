import { jest } from '@jest/globals';

const mockOrders = [];

export const readOrders = jest.fn(() => [...mockOrders]);
export const writeOrders = jest.fn((orders) => {
  mockOrders.length = 0; // Limpia el array antes de agregar nuevos pedidos
  mockOrders.push(...orders);
});

export const clearMocks = () => {
  // mockOrders = [];
  mockOrders.length = 0;
  readOrders.mockClear();
  writeOrders.mockClear();
  // jest.clearAllMocks();
}