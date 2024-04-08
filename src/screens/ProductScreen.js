import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import Rating from '../components/Rating'

function ProductScreen() {
    const productId = useParams();
    const [product, setProduct] = useState();
    
    useEffect(() => {
        const fetchProduct = async () => {
            
            try {
              const response = await fetch(`https://dummyjson.com/products/${productId.id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch products');
              }
              const data = await response.json();
              setProduct(data);
            } catch (error) {
              console.error('Error fetching products:', error);
            }
          };
          fetchProduct();
      }, [productId]);

  return (
    <div>
        <Link to="/" >
            <i className="fas fa-thin fa-chevron-left" />Back to results
        </Link>
        { product && 
        <Row className="p-3 m-3">
            <Col md={6}>
                <Image src={product.thumbnail} />
            </Col>
            <Col md={6} >
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>
                            {product.title}
                        </h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {product.discountPercentage && (
                            <span style={{ color: 'red' }}>{-product.discountPercentage}% </span>
                        )}
                        ${product.price}   
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} color={'#f8e825'} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Brand: </strong>{product.brand}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Category: </strong>{product.category}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Description: </strong>{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        }
    </div>
  )
}

export default ProductScreen
