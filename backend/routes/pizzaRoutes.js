import express from 'express';

// Se importan los controladores para el manejo de las órdenes de las pizzas
import { getAllPizzas, getPizzaByName } from '../controller/pizzaController.js';
import { pizzaExistsValidation, validateResult } from '../validations/pizzaValidations.js';
const router = express.Router();

// Rutas para pizzas
router.get("/pizzas", getAllPizzas);
router.get("/pizzas/:name", pizzaExistsValidation, validateResult, getPizzaByName);

//module.exports = (app) => app.use("/pizzas", router);
export default router;