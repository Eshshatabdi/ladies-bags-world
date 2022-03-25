import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';



const Product = () => {
    const [products, setProducts] = useState([]);

    const [carts, setCarts] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);

    }

    return (
        <div>
            <h2 className='text-center color-info'>Ladis Bags</h2>

            <div className="d-flex">
                <div className="row container">
                    {
                        products.map(product => <Card
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}></Card>)

                    }

                </div>
                <div className='bg-light'>
                    <h3>Order the item</h3>

                    {
                        carts.map(cart => <li key={cart.id}>{cart.name}</li>)
                    }

                    <div>
                        <button className='bg-danger'>Choose product</button>
                    </div>


                </div>

            </div>


        </div>
    );
};

export default Product;