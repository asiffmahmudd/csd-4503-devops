import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProductForm from './ProductForm';

const PopUp = ({show, handleClose, product, deleteProduct, updateProduct}) => {

    const handleDelete = () =>{
        fetch('http://localhost:2000/Products/'+product._id,{
            method : "DELETE"
        })
        .then(data => data.json())
        .then(res => {
            deleteProduct(product._id)
            alert(res.message)
            handleClose()
        })
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    {/* <Modal.Title>{product.Name}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    { 
                    <img src="https://upload.wikimedia.org/wikipedia/mediawiki/a/a9/Example.jpg" alt="Product" style={{width:'100%'}}/>
                    /*<p><b>Price: </b>${product.Price}</p>
                    <p><b>Colour: </b>{product.Colour}</p>
                    <p><b>Manufacturer: </b>{product.Manufacturer}</p>
                    <p><b>Description: </b>{product.Description}</p> */}
                    <ProductForm product={product} updateProduct={updateProduct} handleClose={handleClose}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>  
        </>
    );
};

export default PopUp;