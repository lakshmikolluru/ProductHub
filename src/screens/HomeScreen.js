import React, { useState, useEffect } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'


function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 10;

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
            if (!response.ok) {
            throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setTotal(data.total);
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        };
        fetchProducts();
    }, [page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
        <h1>
            Latest Products
        </h1>
        <Row>
            {products.map(product => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                </Col>
            ))}
        </Row>
        <Row className="text-center">
            <Col>
                <Button onClick={handlePrevPage} disabled={page === 1}>Previous Page</Button>
            </Col>
            <Col>
                <Button onClick={handleNextPage} disabled={page >= (total/limit)}>Next Page</Button>
            </Col>
        </Row>
        </div>
    )
}

export default HomeScreen
