import Header from "./components/header/header"
import Hero from './components/hero/hero'
import OrderListModal from "./components/modal/OrderListModal"
import Section1 from './components/section1/section1'

function App() {

  return (
    <>
      <Header />
      <OrderListModal />

      <main>

        <Hero />
        <Section1 />
        
      </main>

    </>
  )
}

export default App
