import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AppBody = ({products}) => {
    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    {products.map((product, index) => { return <SingleProduct key={index} product={product}/>})}
                </div>
            </div>
        </div>
    );
};

export default AppBody;