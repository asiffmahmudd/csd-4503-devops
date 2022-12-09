import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Items = ({currentItems}) => {
    return (
        <>
            {
                currentItems.map((product, index) => { return <SingleProduct key={index} product={product}/>})
            }
        </>
    );
};

export default Items;