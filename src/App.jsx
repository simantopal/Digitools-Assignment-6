import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product/Product'
import Stats from './Components/Stats/Stats'

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productPromise = fetchProduct();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Product productPromise={productPromise}></Product>
      </Suspense>
    </>
  )
}

export default App
