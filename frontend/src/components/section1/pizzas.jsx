import axios from 'axios';
import { useEffect, useState } from 'react';
import PizzaIMG from '../../assets/pizzas/pizza1.jpg'
import Swal from 'sweetalert2';

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

    const handleOrder = async (pizza) => {
        try {
            const formData = new URLSearchParams();
            formData.append('customerName', 'John Doe');
            formData.append('items[0][name]', pizza.name);
            formData.append('items[0][unitPrice]', pizza.price);
            formData.append('items[0][quantity]', '1');

            const response = await axios.post (
                "http://localhost:3000/api/order", 
                formData.toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );

            console.log("Orden enviada con éxito:", response.data);

            // La orden se confirma y muestra una ventana de sweetalert
            Swal.fire({
                title: '¡Éxito!',
                html: `
                    <p>¡Orden enviada con éxito!</p>
                    <hr style="margin: 10px 0;">
                    <p><strong>Número de orden:</strong> ${response.data.OrderID}</p>
                    <p><strong>Cliente:</strong> ${response.data.customerName}</p>
                    <p><strong>Pizza:</strong> ${response.data.items[0].pizzaName}</p>
                    <p><strong>Cantidad:</strong> ${response.data.items[0].quantity}</p>
                    <p><strong>Precio unitario:</strong> $${response.data.items[0].unitPrice}</p>
                    <p><strong>Total:</strong> $${response.data.totalPrice}</p>
                `,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                timerProgressBar: true,
            });
            
        } catch (error) {

            console.error("Error al enviar la orden:", error);

            // Manejo de errores pero ahora con sweetalert
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al procesar tu orden. Por favor intenta nuevamente.',
                icon: 'error',
                confirmButtonText: 'Entendido',
            });
        }
    }

    
    const HTMLPizzas = pizzas.map((pizza) => {
        return(

            <div key={pizza.name} className="mx-auto w-80 border border-gray-200 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                
                <img className="h-48 w-full object-cover object-center" src={PizzaIMG} alt="Pizza Imagen" />
                
                <div className="p-4">
                    <h2 className="mb-2 text-lg font-medium text-gray-900">{pizza.name}</h2>

                    <p className="mb-2 text-base text-gray-700">
                        <span className='font-semibold'>Ingredients:</span>
                        {pizza.ingredients.map((ingredient, index) => (
                            <span key={index}> {ingredient} </span>
                        ))}
                    </p>

                    <div className="flex items-center justify-between">
                        <p className="mr-2 text-lg font-semibold text-gray-900">${pizza.price}</p>

                        <button onClick={() => handleOrder(pizza)} className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg">Ordenar</button>
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