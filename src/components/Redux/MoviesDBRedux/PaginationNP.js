import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ReactPaginate from 'react-paginate';
import { getPage } from './Actions/moviesAction';

// import { Pagination } from 'react-bootstrap';

const PaginationNP = () => {
    const [pageCount, setPageCount] = useState(0)
    
    const dispatch = useDispatch();
    const pages = useSelector((state)=> state.pageCount)

    useEffect(()=>{
        setPageCount(pages)
    },[pages])
    
    // get Current Page by axios
    const handlePageClick = (data)=>{
        dispatch(getPage(data.selected + 1));
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
