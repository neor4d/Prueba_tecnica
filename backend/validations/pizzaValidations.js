import {validationResult } from 'express-validator';
import { param } from 'express-validator';
import { readData } from '../utils/jsonUtils.js';

// Validación para verificar que la pizza exista
export const pizzaExistsValidation = [
    param('name')
      .trim().notEmpty().withMessage('El nombre de la pizza es requerido')
      .custom(async (name) => {
        
        const data = await readData();
        const pizza = data.find(p => p.name === name);
        
        if (!pizza) {
          throw new Error('Pizza no encontrada');
        }

        return true;
    })
];

// Middleware para manejar resultados de validación
export const validateResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};