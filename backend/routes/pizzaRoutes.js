import express from 'express';
const router = express.Router();

// Se importan los controladores para el manejo de las órdenes de las pizzas
import { getAllPizzas, getPizzaById } from '../controller/pizzaController.js';

// Rutas para pizzas
router.get("/pizzas", getAllPizzas);
router.get("/pizzas/:id", getPizzaById);

module.exports = (app) => app.use("/pizzas", router);