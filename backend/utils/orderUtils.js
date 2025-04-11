import { readOrders, writeOrders } from '../model/ordersModel.js';

// Se crea la función para generar las ordenes
export const createOrder = (req, res) => {

  const { customerName, items } = req.body;

  const ordersData = readOrders();
  const newOrder = {
    id: ordersData.orders.lenght + 1,
    customerName,
    items,
    total: items.reduce((acc, item) => acc + item.quantity * item.price, 0),
    createdAt: new Date().toISOString(),
  };

  ordersData.orders.push(newOrder);
  writeOrders(ordersData.orders);

  res.status.json(newOrder);

}

export const getOrders = (req, res) => {
  const ordersData = readOrders();
  res.json(ordersData.orders);
}