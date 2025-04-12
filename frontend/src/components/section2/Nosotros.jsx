import PizzaIMG_1 from '../../assets/pizzas/pizza2.jpg'
import PizzaIMG_2 from '../../assets/pizzas/pizza3.jpg'

function Nosotros() {
    return (

        <section id="Nosotros" class="py-24 relative bg-gray-100" >
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div
                        class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img class=" rounded-xl object-cover" src={PizzaIMG_1} alt="Pizza caliente" />
                        </div>
                        <img class="sm:ml-0 ml-auto rounded-xl object-cover" src={PizzaIMG_2}
                            alt="Pizza en horno" />
                    </div>
                    <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-center items-start gap-8 flex">
                            <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2
                                    class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Tenemos las mejores Pizzas</h2>
                                <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem sunt ipsum nulla nemo voluptatum,
                                     aperiam iusto illum! Totam asperiores velit possimus neque quaerat eveniet ut ab fugiat provident! Eos, rerum.</p>
                            </div>
                            <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">4,8</h3>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Estrellas</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">+20</h4>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Años cocinando</h6>
                                </div>
                                <div class="flex-col justify-start items-start inline-flex">
                                    <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">100%</h4>
                                    <h6 class="text-gray-500 text-base font-normal leading-relaxed">Tradicional con leña</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Nosotros;