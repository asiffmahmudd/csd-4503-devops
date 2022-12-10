import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Items = ({currentItems, deleteProduct, updateProduct}) => {
    return (
        <>
            {
                currentItems.map((product, index) => { return <SingleProduct key={index} updateProduct={updateProduct} product={product} deleteProduct={deleteProduct}/>})
            }
        </>
    );
};

export default Items;