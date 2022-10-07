import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <h5>{name}</h5>
                    <p><small>Price: <span className='price-style'>${price}</span></small></p>
                    <p><small>Shipping: <span className='price-style'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='price-style'>${quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;