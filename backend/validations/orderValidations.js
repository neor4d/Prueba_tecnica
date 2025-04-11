import { body }   from 'express-validator';
import { pizzaExists, getPizzaByName, comparePrices  } from '../utils/pizzaUtils.js';

// Se Exporta las validaciones de las órdenes
export const createOrderValidation = [

    //Se verifica que el nombre del cliente sea válido
    body('customerName')
        .trim()
        .notEmpty().withMessage('El nombre del cliente es requerido')
        .isLength({ max: 100 }).withMessage('Máximo 100 caracteres'),
        

    //Se verifica que al menos haya un artículo para la orden
    body('items')
        .isArray({ min: 1 }).withMessage('Debe incluir al menos una pizza'),
        
    // Verificar los datos de la pizza
    body('items.*.name')
        .trim()

        //Verificar qe la pizza tenga nombre
        .notEmpty().withMessage('El nombre de la pizza es requerido')
        .custom(async (name) => {

            // Verificar que la pizza se encuentre en el array (Base de datos)
            if (!pizzaExists(name)) {
                const pizzas = getPizzas();
                const availablePizzas = pizzas.map(p => p.name).join(', ');
                throw new Error(`La pizza '${name}' no existe. Opciones: ${availablePizzas}`);
            }
            return true;

        }),

    
    // Calcular la cantidad de items
    body('items.*.quantity')
        .optional()

        // Determinar una cantidad mínima para ordenar
        .isInt({ min: 1 }).withMessage('Cantidad mínima: 1'),

    // 
    body('items')
    
        // Se valida que es un array
        .isArray({ min: 1 }).withMessage('Debe incluir al menos un ítem') 

        // Se recibe el array de los items
        .custom(async (items, { req }) => {

            // Validar cada item uno por uno para minizmiar errores
            for (const [index, item] of items.entries()) {

                // Validar que el item tenga nombre antes de pasar a la siguiente validacion
                if (!item.name) {
                    throw new Error(`El ítem en posición ${index} no tiene nombre`);
                }
    
                // Buscar la pizza en el archivo JSON (base de datos)
                const pizza = await getPizzaByName(item.name);
                if (!pizza) {
                    throw new Error(`La pizza '${item.name}' no existe en el menú`);
                }
    
                // Validar que el precio sea igual al de la base de datos
                if (item.unitPrice !== undefined) {
                    if (!comparePrices(item.unitPrice, pizza.price)) {
                        throw new Error(
                            `El precio de ${item.name} (${item.unitPrice}) ` +
                            `no coincide con el precio oficial (${pizza.price})`
                        );
                    }
                }
            }
            return true;
    })
];