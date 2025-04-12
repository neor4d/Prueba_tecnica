import Pizzas from './pizzas'

function Section1() {
    return(
        <>
        <section id="Catalogo">

            <div className="py-8">

                <h2 className="font-sour-gummy text-center text-4xl mb-4">Catálogo de Pizzas</h2>

                <div className="flex flex-wrap gap-6 p-4">

                    <Pizzas />

                </div>

            </div>

        </section>
        </>
    )
}

export default Section1