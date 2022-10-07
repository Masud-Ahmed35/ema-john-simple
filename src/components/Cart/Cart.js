import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let grandTotal = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }
    const totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Total Tax: ${totalTax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button className='btn-clear-cart' onClick={handleClearCart}>Clear Cart <FontAwesomeIcon className='trash-icon' icon={faTrashCanArrowUp}></FontAwesomeIcon></button>
            <br />
            <div className='preview-orders'>
                {children}
            </div>
        </div>
    );
};

export default Cart;