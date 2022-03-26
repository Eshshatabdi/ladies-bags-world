import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = ({ product, handleAddToCart }) => {
    const { price, name, image } = product
    return (
        <div className="col-md-4 gy-5">
            <div className="card h-100">
                <img src={image} alt="" />
                <h3>name:{name}</h3>
                <p>price:{price}</p>
                <button onClick={() => { handleAddToCart(product) }} className='bg-primary text-white border-0 radius'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>




            </div>

        </div>
    );
};

export default Card;