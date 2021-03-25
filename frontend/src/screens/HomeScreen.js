import React, { useState , useEffect } from 'react'
import { Row , Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => { //cannot make useffect async
        const getProducts = async () => {
            const { data } = await axios.get('/api/products'); //destructure data from res.

            setProducts(data);
        }

        getProducts();
    }, [])

    return (
        <>
         <h1>Latest Products</h1>
         <Row>
             {products.map(product => (
                 <Col sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product={product}/>
                 </Col>
             ))}
         </Row>   
        </>
    )
}

export default HomeScreen
