import React from 'react';
import Card from '../Card/Card';

const AvailableProduct = ({products, setCart, cart, setSelectedProduct, selectedProduct}) => {
    console.log(products, "products")
    return (
        <div>
            <div className='grid grid-cols-3 space-y-7'>
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