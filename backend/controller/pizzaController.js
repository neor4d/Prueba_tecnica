import { readData } from '../utils/pizzaUtils.js';

// Se obtienen los datos de todas las pizzas
export const getAllPizzas = (req, res) => {
    try {
        const data = readData(); // Asignar directamente el resultado
    
        if (!data || data.length === 0) {
            return res.status(404).json({ error: "No hay datos disponibles" });
        }
    
        // Suponiendo que deseas obtener el nombre de la primera pizza
        res.json(data);
    
    } catch (error) {
        res.status(500).json({ error: "Error al leer los datos" });
    }
};

//sE obtiene solo los datos de las pizzas con la id
export const getPizzaByName = async (req, res) => {

    const { name } = req.params;
    try {
        const data = await readData(); // Asignar directamente el resultado

        if (!data) {
            return res.status(500).json({ error: "No se pudieron obtener los datos" });
        }

        const pizza = data.find(pizza => pizza.name.toLowerCase() === name.toLowerCase());

        if (pizza) {
            res.status(200).json(pizza);
        } else {
            res.status(404).json({ error: "Pizza no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al leer los datos" });
    }

};