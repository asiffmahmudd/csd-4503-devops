import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AppBody = () => {
    return (
        <div class="py-5 bg-light">
            <div class="container">
                <div class="row">
                    <SingleProduct/>
                </div>
            </div>
        </div>
    );
};

export default AppBody;