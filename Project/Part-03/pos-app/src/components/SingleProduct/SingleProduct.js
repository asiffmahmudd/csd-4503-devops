import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PopUp from '../PopUp/PopUp';

const SingleProduct = ({product, deleteProduct, updateProduct}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-3 mt-4">
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={product.Image} style={{ height: '13rem' }} />
            <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>
                    {`$${product.Price}`}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>See Details</Button>
            </Card.Body>
            </Card>
            <PopUp show={show} handleClose={handleClose} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct}/>
            
        </div>
    );
};

export default SingleProduct;