import { useState } from 'react';
import Header from "./components/header/header"
import Hero from './components/hero/hero'
import OrderListModal from "./components/modal/OrderListModal"
import Section1 from './components/section1/section1'
import Nosotros from './components/section2/Nosotros'
import Contacto from './components/section3/Contact'

function App() {

  return (
    <>
      <Header />
      <OrderListModal/>

      <main>

        <Hero />
        <Section1 />
        <Nosotros />
        <Contacto />

      </main>

    </>
  )
}

export default App
