import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), './data/orders.json');

// Se parsea los datos JSON que se obtienen del archivo
export const readOrders = () => {
  if (!fs.existsSync(DB_PATH)) {
      return []; // Retorna un array vacío si el archivo no existe
  }
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
};

// Función para escribir datos en el json de las órdenes
export const writeOrders = (data) => {
  try {
      // Primero se asegura que el directorio exista
      fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
      
      // Escribe el archivo con formato legible
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    
  } catch (error) {
      throw new Error(`Error writing to ${DB_PATH}: ${error.message}`);
  }
};