// Archivo para el manejo de los archivos JSON
import fs from 'fs';
import path from 'path';

// Proccess.cwd es para obtener la ruta de la "base de datos"
const DB_PATH = path.join(process.cwd(), './data/example-pizzas.json');

// Se parsea los datos JSON que se obtienen del archivo
export const readData = () => {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
};