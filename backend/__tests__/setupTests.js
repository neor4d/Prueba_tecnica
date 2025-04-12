import { jest } from '@jest/globals';

// Configuración global de Jest
jest.setTimeout(10000); // Timeout aumentado

// Mock globales si son necesarios
global.console = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn()
};