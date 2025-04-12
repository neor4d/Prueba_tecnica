import pizza_bg from '../../assets/bg/pizza_bg-1.jpg'

function Hero() {
    return (
      <>
        <section id="Inicio">

            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={pizza_bg} alt="Background Image" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-5xl font-bold leading-tight mb-4 font-sour-gummy">Ordena tus pizzas con nosotros</h1>
                    <p className="text-lg text-gray-300 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officia animi provident beatae quis eos.</p>
                    <a href="#" className="bg-orange-600 text-gray-200 hover:bg-orange-500 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Ver Catálogo</a>
                </div>
            </div>
            
        </section>
      
      </>
    )
}

export default Hero