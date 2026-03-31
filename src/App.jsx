import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify'

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

      <ToastContainer />
    </>
  )
}

export default App
