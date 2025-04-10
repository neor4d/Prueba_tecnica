import { readData } from '../utils/jsonUtils.js';

// Se obtienen los datos de todas las pizzas
export const getAllPizzas = (req, res) => {
    try {
        const data = readData();
        res.status(200).json(data); 

    } catch (error) {
        res.status(500).json({ error: "Error al leer los datos" });
    }
};

//sE obtiene solo los datos de las pizzas con la id
export const getPizzaByName = (req, res) => {
    const { name } = req.params;
    const data = readData();
    const pizza = data.find(pizza => pizza.name == name);

    if (pizza) {
        res.status(200).json(pizza);
    } else {
        res.status(404).json({ error: "Pizza no encontrada" });
    }
};