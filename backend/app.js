import express from 'express';
const app = express();

// Importar rutas
import pizzaRoutes from './routes/pizzaRoutes.js';

// Se usa de esta manera para hacer consultas a la api
// app.use('/api', pizzaRoutes);

// Con supertest para que la ruta decida con que servidor trabajar
pizzaRoutes(app);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});