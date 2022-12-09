import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const SingleProduct = ({product}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="col-md-3 mt-4">
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/mediawiki/a/a9/Example.jpg" />
            <Card.Body>
                <Card.Title>{product.Name}</Card.Title>
                <Card.Text>
                    {`$${product.Price}`}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>See Details</Button>
            </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src="https://upload.wikimedia.org/wikipedia/mediawiki/a/a9/Example.jpg" alt="Product" style={{width:'100%'}}/>
                    <p><b>Price: </b>${product.Price}</p>
                    <p><b>Colour: </b>{product.Colour}</p>
                    <p><b>Manufacturer: </b>{product.Manufacturer}</p>
                    <p><b>Description: </b>{product.Description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SingleProduct;