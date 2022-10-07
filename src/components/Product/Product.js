import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='price-style' style={{ fontWeight: 500 }}>Price: ${price}</p>
                <div className='product-info-more'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Ratings: {ratings} Star</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p style={{ marginRight: "10px" }}>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;