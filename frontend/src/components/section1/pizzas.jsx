import axios from 'axios';
import { useEffect, useState } from 'react';
import PizzaIMG from '../../assets/pizzas/pizza1.jpg'

function Pizzas() {

    const [pizzas, setPizzas] = useState([]);

    const getPizzas = async () => {

        // Realizo la petición get a la api (AGREGAR LOS CORS)
        const response = await axios.get("http://localhost:3000/api/pizzas");
        // console.log(response.data);
        setPizzas(response.data);

    }

    useEffect(() => {
        getPizzas();
    }, [])

    
    const HTMLPizzas = pizzas.map((pizza) => {
        return(

            <div key={pizza.name} className="mx-auto w-80 border border-gray-200 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                
                <img className="h-48 w-full object-cover object-center" src={PizzaIMG} alt="Pizza Imagen" />
                
                <div className="p-4">
                    <h2 className="mb-2 text-lg font-medium text-gray-900">{pizza.name}</h2>

                    <p className="mb-2 text-base text-gray-700">
                        <span className='font-semibold'>Ingredients:</span>
                        {pizza.ingredients.map((ingredient, index) => (
                            <span> {ingredient} </span>
                            
                        ))}
                    </p>

                    <div className="flex items-center justify-between">
                        <p className="mr-2 text-lg font-semibold text-gray-900">${pizza.price}</p>

                        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">Ordenar</button>
                    </div>
                </div>

            </div>
        )
    })

    return (
        HTMLPizzas
    )

}

export default Pizzas;