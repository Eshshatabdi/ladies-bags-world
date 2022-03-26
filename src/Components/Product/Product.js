import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';



const Product = () => {
    const [products, setProducts] = useState([]);

    const [carts, setCarts] = useState([]);


    const [item, setItem] = useState(0);

    const [remove, setRemove] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);


    }

    const chooseItems = (item) => {
        const len = [...carts];
        const newLen = len.find(pd => pd.name === 'name')
        setItem(newLen);
        // const random = Math.floor(Math.random() * product.length)
        // setItem(random)

        console.log(newLen)
    }
    const removeCart = () => {
        // setRemove([])
    }

    return (
        <div>
            <h2 className='text-center text-primary'>Ladies Bags World</h2>

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
                    <h4>Choose your item</h4>

                    {
                        // carts.map(cart => <li key={cart.id}>{cart.name}</li>)
                        carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                    }

                    <div>
                        <button onClick={() => { chooseItems() }} className='bg-primary text-white border-0 radius'>Choose product</button>
                        <br />
                        <button onClick={() => { removeCart(item) }} className='mt-3 bg-primary text-white border-0 radius'>Choose Again</button>


                    </div>


                </div>

            </div>


        </div>
    );
};

export default Product;