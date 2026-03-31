import React from 'react';
import Card from '../Card/Card';

const AvailableProduct = ({products, setCart, cart, setSelectedProduct, selectedProduct}) => {
    console.log(products, "products")
    return (
        <div className='px-8 sm:px-15 md:px-10 lg:px-40'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products.map((product, ind) => {
                    return <Card key={ind} product={product} setCart={setCart} cart={cart} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}></Card>
                })
            }
            </div> 
        </div>   
    );
};

export default AvailableProduct;