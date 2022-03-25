import React from 'react';

const Card = ({ product }) => {
    const { price, name, image } = product
    return (
        <div className="col-md-4 gy-5">
            <div className="card h-100">
                <img src={image} alt="" />
                <h3>name:{name}</h3>
                <p>price:{price}</p>
                <button className='bg-danger'>Add to Cart</button>




            </div>

        </div>
    );
};

export default Card;