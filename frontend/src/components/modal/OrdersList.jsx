import axios from 'axios';
import { useEffect, useState } from 'react';
import PizzaIMG from '../../assets/pizzas/pizza1.jpg'

function OrdersList() {

    const [orders, setOrders] = useState([]);

    const getOrders = async () => {

        const response = await axios.get("http://localhost:3000/api/order");
        //console.log(response.data);
        setOrders(response.data);

    }

    useEffect(() => {

        // Se actualiza constantemente para tener las nuevas ordenes cada segundo
        const interval = setInterval(getOrders, 1000);

        getOrders();

        // Limpiar el el intervalo para evitar problemas
        return () => clearInterval(interval);

    }, [])

    const HTMLOrders = orders.map((order, index) => {
        return (

            <div key={index} className="flex gap-4 pb-4 border-b border-gray-200">
                <img src={PizzaIMG} alt="Pizza Image" className="w-[10rem] rounded-lg" />

                {order.items.map((item, index) => (
                    <div key={index}>
                        <h4 className="text-3xl font-semibold italic text-gray-800"> { item.pizzaName } </h4>
                        <ul className="pt-4">
                            <li><b className='text-gray-600'>Order ID:</b> { order.OrderID } </li>
                            <li><b className='text-gray-600'>Customer:</b> { order.customerName } </li>
                            <li><b className='text-gray-600'>Quantity:</b> { item.quantity } </li>
                            <li><b className='text-gray-600'>Pizza Price:</b> ${ item.unitPrice } </li>
                            <li><b className='text-gray-600'>Total:</b> ${ order.totalPrice } </li>
                        </ul>
                    </div>
                ))}
            </div>

        )
    })

    return (
        HTMLOrders   
    )
}

export default OrdersList;