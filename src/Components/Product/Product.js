import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import Qusans from '../Quans/Qusans';



const Product = () => {
    const [products, setProducts] = useState([]);

    const [carts, setCarts] = useState([]);


    const [item, setItem] = useState([]);





    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...carts, product];
        setCarts(newCart);


    }

    const chooseItems = (carts) => {
        let random = carts[Math.floor(Math.random() * carts.length)]

        setItem(random);
        setCarts([])



    }
    const removeCart = () => {
        let clearData = [];
        setCarts(clearData)

    }

    return (
        <div>
            <h2 className='text-center text-primary'>Ladies Bags World</h2>

            {/* <div> */}
            <div className='bg-light ps-3'>
                <h4>Choose your item</h4>

                {

                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
                <div>
                    <h4>{item.name}
                    </h4>
                </div>

                <div>
                    <button onClick={() => { chooseItems(carts) }} className='bg-primary text-white border-0 radius'>Choose product</button>
                    <br />
                    <button onClick={removeCart} className='mt-3 bg-primary text-white border-0 radius'>Choose Again</button>


                </div>


            </div>








            <div className=" row container ">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}></Card>)

                }

            </div>


            {/* </div> */}

            <div className=' row container'>
                <Qusans></Qusans>
            </div>


        </div>
    );
};

export default Product;