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
            <h2>Ladis Bags</h2>
            {
                products.map(product => console.log(product.id

                ))
            }

        </div>
    );
};

export default Product;