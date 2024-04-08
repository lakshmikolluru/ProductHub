import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <div>
        <Card className='my-3 py-3 rounded'>
            <Link to={`/products/${product.id}`}>
                <Card.Img src={product.thumbnail}></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/products/${product.id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {product.title}
                        </strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as='h3'>
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product
