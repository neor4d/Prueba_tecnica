// Archivo para el manejo de los archivos JSON
import fs from 'fs';
import path from 'path';

// Cache para mejorar performance
let pizzasCache = null;

const DB_PATH = path.join(process.cwd(), './data/example-pizzas.json');

// Se parsea los datos JSON que se obtienen del archivo
export const readData = () => {

  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);

};

// Función para escribir datos en el json de las ordenes
export const writeData = (filePath, data) => {
    try {
        // Primero se asegura que el directorio exista
        fs.mkdir(path.dirname(filePath), { recursive: true });
        
        // Escribe el archivo con formato legible
        fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
      
    } catch (error) {
        throw new Error(`Error writing to ${filePath}: ${error.message}`);
    }
};

// Se parsea los datos JSON que se obtienen del archivo
export const getPizzas = () => {
  if (!pizzasCache) {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    pizzasCache = JSON.parse(data);
  }
  return pizzasCache;
};

// Función para verificar si una pizza existe (case insensitive)
export const pizzaExists = (name) => {
  const pizzas = getPizzas();
  return pizzas.some(pizza => 
    pizza.name.toLowerCase() === name.toLowerCase()
  );
};

// Función para obtener una pizza por nombre
export const getPizzaByName = (name) => {
  const pizzas = getPizzas();
  return pizzas.find(pizza => 
    pizza.name.toLowerCase() === name.toLowerCase()
  );
};

// Función para comparar precios de manera segura
export const comparePrices = (price1, price2) => {
    return Math.abs(price1 - price2) < 0.0001; // Tolerancia para decimales
};