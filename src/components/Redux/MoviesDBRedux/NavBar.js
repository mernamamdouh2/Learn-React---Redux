import { Col, Container, Row } from 'react-bootstrap';
import { getAllMovie, getMovieSearch } from './Actions/moviesAction';

import React from 'react'
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const onSearch = (word)=>{
        searchFromMovies(word)
    }
    const dispatch = useDispatch();

    // search from Movies by axios
    const searchFromMovies = async (word) =>{
        if(word === '') {
            dispatch(getAllMovie());
        }else {
            dispatch(getMovieSearch(word));
        }
    }
    
    return (
        <div className='nav-style w-100'>
            <Container>
                <Row>
                    <Col xs='2' lg='1'>
                        <a href='/moviesDB'>
                            <img className='logo' src='logo192.png' alt='logo'/>
                        </a>
                    </Col>
                    <Col xs='10' lg='11' className='d-flex align-items-center'>
                        <div className='search w-100'>
                            <i className='fa fa-search'></i>
                            <input onChange={(e)=> onSearch(e.target.value)} type='search' className='form-control' placeholder='Search'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar;
