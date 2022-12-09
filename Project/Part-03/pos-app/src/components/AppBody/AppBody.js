import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'
import Items from '../Items/Items';
import "./AppBody.css";

const AppBody = ({products}) => {
    const itemsPerPage = 10
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
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
                    <Items currentItems={currentItems}/>
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