import { readOrders, writeOrders } from '../model/ordersModel.js';
import { validationResult } from 'express-validator';

// Se crea la función para generar las ordenes
export const createOrder = (req, res) => {

  console.log(req.body);

  // Manejo de errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }

  const customerName = req.body.customerName;

  // Verifica si customerName y items están presentes
  if (!customerName || req.body.items.length === 0) {
      return res.status(400).json({ error: "Faltan datos en la solicitud" });
  }

  // Bucle para qu e los items se guarden dentro de una variable
  const processedItems = req.body.items.map(item => ({

      pizzaName: item.name,
      quantity: parseInt(item.quantity),
      unitPrice: parseFloat(item.unitPrice)
  
  }));

  const totalPrice = processedItems.reduce((total, item) => {
        return total + (item.quantity * item.unitPrice);
  }, 0);

  const ordersData = readOrders();
  const newOrder = {
      OrderID: ordersData.length + 1,
      customerName,
      items: processedItems,
      totalPrice: totalPrice
  };

  ordersData.push(newOrder); // Agrega la nueva orden al array existente
  writeOrders(ordersData); // Escribe el nuevo array en el archivo

  res.status(201).json(newOrder); // Responde con la nueva orden creada

}

export const getOrders = (req, res) => {
  const ordersData = readOrders();
  res.json(ordersData);
}