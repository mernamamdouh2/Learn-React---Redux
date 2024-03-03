// import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { Container } from 'react-bootstrap';
import MoviesList from './MoviesList';
import NavBar from './NavBar';
import React from 'react';

// import MovieDetails from './MovieDetails';

const MoviesDBRedux = () => {
    return (
        <div className='font color-body'>
            <NavBar/>
            <Container>
                <MoviesList/>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path='/moviesDBRedux' element={<MoviesList/>}/>
                        <Route path='/movieRedux/:id' element={<MovieDetails/>}/>
                    </Routes>
                </BrowserRouter> */}
            </Container>
        </div>
    )
}

export default MoviesDBRedux
