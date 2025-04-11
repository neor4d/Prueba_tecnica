import express from 'express';

// Se importan los controladores para el manejo de las órdenes de las pizzas
import { createOrder, getOrders } from '../controller/orderController.js';
import { createOrderValidation } from '../validations/orderValidations.js';

const router = express.Router();

// Rutas para las ordenes
router.post("/order", createOrderValidation, createOrder);
router.get("/order", getOrders);
//router.get("/order/:id", createOrderValidation);

//module.exports = (app) => app.use("/pizzas", router);
export default router;