import React, { use, useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct';
import SelectedProduct from './SelectedProduct';

const Product = ({productPromise, setCart, cart}) => {
    // console.log(productPromise);
    const products = use(productPromise);
    // console.log(products);
    const [selectedType, setSelectedType] = useState("product");
    console.log(selectedType, "SelectedType");

    const [selectedProduct, setSelectedProduct] = useState([]);
    return (
        <div className='py-30 mx-auto'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-5xl mb-4'>Premium Digital Tools</h1>
                <p className='mb-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                
                
                <div>
                    
                    <button onClick={() => setSelectedType("product")} className={`btn ${selectedType === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}  rounded-3xl`}>Products</button>

                    <button onClick={() => setSelectedType("Cart")} className={`btn ${selectedType === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}  rounded-3xl`}>Cart ({selectedProduct.length})</button>
                </div>
            </div>
            <div>
                {selectedType === "product" ? "" : <h2 className='font-medium text-2xl mb-6'>Your Cart</h2>}
                
            </div>
            

            {selectedType === "product" ? (
                <AvailableProduct products={products} setCart={setCart} cart={cart} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}></AvailableProduct>
            ) : (
            <SelectedProduct selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} setCart={setCart} cart={cart}></SelectedProduct>)}
        </div>
    );
    
};

export default Product;