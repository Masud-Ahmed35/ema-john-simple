import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, name, price, ratings, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p style={{ fontWeight: 500 }}>Price: ${price}</p>
                <div className='product-info-more'>
                    <p><small>Manufacturer: {seller}</small></p>
                    <p><small>Ratings: {ratings} Star</small></p>
                </div>
            </div>
            <button className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;