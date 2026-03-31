import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify'
import Step from './Components/StepSection/Step'
import Pricing from './Components/PricingSection/Pricing'

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productPromise = fetchProduct();
  const [cart, setCart] = useState(0);
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Product productPromise={productPromise} setCart={setCart} cart={cart}></Product>
      </Suspense>
      <Step></Step>
      <Pricing></Pricing>

      <ToastContainer />
    </>
  )
}

export default App
