import React from 'react'
// import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

const PaginationNP = ({getCurrentPage, pageCount}) => {
    const handlePageClick = (data)=>{
        getCurrentPage(data.selected + 1)
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            containerClassName='pagination justify-content-center p-3'
            pageClassName='page-item'
            pageLinkClassName='page-link text-dark'
            previousClassName='page-item'
            nextClassName='page-item'
            previousLinkClassName='page-link'
            nextLinkClassName='page-link'
            breakClassName='page-item disabled'
            breakLinkClassName='page-link'
            activeClassName='active'
        />
    )
}

export default PaginationNP;
