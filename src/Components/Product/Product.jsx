import React, { use, useState } from 'react';
import AvailableProduct from '../AvailableProduct/AvailableProduct';
import SelectedProduct from './SelectedProduct';

const Product = ({productPromise}) => {
    // console.log(productPromise);
    const products = use(productPromise);
    // console.log(products);
    const [selectedType, setSelectedType] = useState("product");
    console.log(selectedType, "SelectedType");
    return (
        <div className='px-50 py-30'>
            <div className='justify-center text-center mb-10'>
                <h1 className='font-bold text-5xl mb-4'>Premium Digital Tools</h1>
                <p className='mb-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                
                
                <div>
                    
                    <button onClick={() => setSelectedType("product")} className={`btn ${selectedType === "product" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}  rounded-3xl`}>Products</button>

                    <button onClick={() => setSelectedType("Cart")} className={`btn ${selectedType === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}  rounded-3xl`}>Cart (0)</button>
                </div>
            </div>
            {selectedType === "product" ? "" : <h2 className='font-medium text-2xl'>Your Cart</h2>}

            {selectedType === "product" ? (<AvailableProduct products={products}></AvailableProduct>) : (<SelectedProduct></SelectedProduct>)}
        </div>
    );
};

export default Product;