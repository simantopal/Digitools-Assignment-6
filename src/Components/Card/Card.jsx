import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({product, setCart, cart, setSelectedProduct, selectedProduct}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleChooseProduct = () => {
        toast.success(`${product.name} Added to cart`)

        setCart(cart + 1);
        setIsSelected(true); 
        setSelectedProduct([...selectedProduct, product])
        }

    return (
        <div className="card bg-base-100 shadow-2xl px-6 py-6 mx-auto">
            <div className="card-body">
                <div className='flex justify-between mb-4'>
                    <img src="/src/assets/products/writing_2327400 1.png" alt="" className='w-12 h-12' />
                    <span className="badge badge-xs badge-warning">{product.tag}</span>
                </div>
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p>{product.description}</p>
                    <span className="text-xl">${product.price}/{product.period}</span>
                </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {product.features.slice(0, 3).map((feature, ind) => (
                        <li key={ind}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 me-2 inline-block text-success"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                    </ul>
                <div className="mt-6">
                    <button 
                    className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl btn-block" 
                    onClick={handleChooseProduct} 
                    disabled={isSelected}>
                        {isSelected === true ? "Added to cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;