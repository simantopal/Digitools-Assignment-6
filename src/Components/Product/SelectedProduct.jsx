import React from 'react';
import Product from './Product';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectedProduct = (
    {selectedProduct, setSelectedProduct, setCart, cart}) => {
    console.log(selectedProduct, "selectedProduct");

    const handleRemoveProduct = (product) => {
        console.log(selectedProduct, "Product")
        const filteredProducts = selectedProduct.filter((selectedProduct) => selectedProduct.name != product.name,)
        console.log(filteredProducts, "filteredProducts")
        setSelectedProduct(filteredProducts);
        setCart(cart -1);
        toast.warning(`${product.name} Remove to cart`)
    }
    const handleCheckout = () => {
        if (selectedProduct.length === 0) return;
        setSelectedProduct([]);
        setCart(0);
        toast.success("Checkout complete. All products removed!");
    }

    // Total price calculation
    const totalPrice = selectedProduct.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className='space-y-6 mx-auto'>
            {selectedProduct.length === 0 ? (
                <div className='flex h-92 items-center justify-center flex-col gap-4'>
                    <h2 className='font-semibold text-2xl'>No Product bought yet</h2>
                    <p>Go to products tab to buy product.</p>
                </div>
            ) : (
                <>
                    {selectedProduct.map((product) => (
                        <div key={product.name} className='flex items-center gap-5 justify-between p-10 rounded-2xl border'>
                            <div className='flex items-center gap-3'>
                                <img src={product.Img} alt={product.name} className='h-15 w-auto' />
                                <div>
                                    <h2 className='flex items-center gap-2 font-medium text-xl'>{product.name}</h2>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                            <button className='text-red-500' onClick={() => handleRemoveProduct(product)}>Remove</button>
                        </div>
                    ))}

                    <div className='flex items-center justify-between mt-6'>
                        <h2>Total:</h2>
                        <p className='font-bold text-2xl'>${totalPrice}</p>
                    </div>

                    <button
                        className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl btn-block font-semibold h-12 mt-4'
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default SelectedProduct;