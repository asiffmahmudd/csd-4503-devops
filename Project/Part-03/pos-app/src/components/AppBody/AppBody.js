import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'
import Items from '../Items/Items';
import "./AppBody.css";

const AppBody = ({products, deleteProduct, updateProduct}) => {
    const itemsPerPage = 10
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className="py-5 bg-light">
            <div className="container">
                <div className="row">
                    <Items currentItems={currentItems} deleteProduct={deleteProduct} updateProduct={updateProduct}/>
                    <div className='cstm-pagination mt-5'>
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="Next"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="Previous"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBody;