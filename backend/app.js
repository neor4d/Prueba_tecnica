import express from 'express';
import cors from 'cors';

const app = express();

// Cors para permitir consultas a la api
app.use(cors({
    origin: 'http://localhost:5173', // IMPORTANTE CAMBIAR EL ORIGIN POR LA RUTA QUE SE TENDRÁ AL FINAL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutas
import pizzaRoutes from './routes/pizzaRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Se usa de esta manera para hacer consultas a la api
app.use('/api', pizzaRoutes);
app.use('/api', orderRoutes);


app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});
// Con supertest para que la ruta decida con que servidor trabajar
//pizzaRoutes(app);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});

export default app;