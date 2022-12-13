import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import moment from 'moment';
import { useForm } from "react-hook-form";
import { serverurl } from '../../config';

const ProductForm = ({product, updateProduct, handleClose}) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(serverurl+'/Products/'+product._id,{
            method : "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(data => data.json())
        .then(res => {
            alert(res.message)
            updateProduct(product._id, data)
            handleClose()
        })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={product.Name} {...register("Name")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" defaultValue={product.Price} {...register("Price")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Colour">
                    <Form.Label>Colour</Form.Label>
                    <Form.Control type="text" defaultValue={product.Colour} {...register("Colour")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Manufacturer">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control type="text" defaultValue={product.Manufacturer} {...register("Manufacturer")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="StartingDateAvailable">
                    <Form.Label>Starting Date</Form.Label>
                    <Form.Control type="date" defaultValue={moment(product.StartingDateAvailable).format('YYYY-MM-DD')} {...register("StartingDateAvailable")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="EndingDateAvailable">
                    <Form.Label>Ending Date</Form.Label>
                    <Form.Control type="date" defaultValue={moment(product.EndingDateAvailable).format('YYYY-MM-DD')} {...register("EndingDateAvailable")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} defaultValue={product.Description} {...register("Description")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Weight">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="text" defaultValue={product.Weight} {...register("Weight")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="MaxRPM">
                    <Form.Label>Max RPM</Form.Label>
                    <Form.Control type="text" defaultValue={product.MaxRPM} {...register("MaxRPM")} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" defaultValue={product.Model} {...register("Model")} required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default ProductForm;