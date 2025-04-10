import { readData } from '../utils/jsonUtils.js';

// Se obtienen los datos de todas las pizzas
export const getAllPizzas = (req, res) => {
    try {
        const data = readData();
        res.json(data); 

    } catch (error) {
        res.status(500).json({ error: "Error al leer los datos" });
    }
};

//sE obtiene solo los datos de las pizzas con la id
export const getPizzaById = (req, res) => {
    const { id } = req.params;
    const data = readData();
    const pizza = data.pizzas.find(pizza => pizza.id === parseInt(id));

    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).json({ error: "Pizza no encontrada" });
    }
};