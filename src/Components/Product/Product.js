import React, { useEffect, useState } from 'react';
import image1 from '../../michel cors.jpg';
import image2 from '../../ck.jpg';
import image3 from '../../garage2.jpg';
import image4 from '../../koras.jpg';
import image5 from '../../kelvin clain.jpg';
import image6 from '../../Dkny.jpg';
import image7 from '../../markjeckob.jpg';
import image8 from '../../prada.jpg';
import image9 from '../../prada.jpg';
import Card from '../Card/Card';



const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // const products = [
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    //     {
    //         id: 1,
    //         name: 'michel cors',
    //         price: '4000',
    //         image: { image1 }
    //     },
    // ]
    return (
        <div>
            <h2 className='text-center color-info'>Ladis Bags</h2>

            <div className="d-flex">
                <div className="row container">
                    {
                        products.map(product => <Card
                            key={product.id}
                            product={product}></Card>)

                    }

                </div>
                <div className='bg-light'>
                    <h3>Order the item</h3>

                </div>
            </div>

        </div>
    );
};

export default Product;