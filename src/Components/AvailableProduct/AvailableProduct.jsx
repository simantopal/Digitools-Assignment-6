import React from 'react';
import Card from '../Card/Card';

const AvailableProduct = ({products}) => {
    console.log(products, "products")
    return (
        <div>
            <div className='grid grid-cols-3 space-y-7'>
            {
                products.map((product, ind) => {
                    return <Card key={ind} product={product}></Card>
                })
            }
            </div> 
        </div>   
    );
};

export default AvailableProduct;