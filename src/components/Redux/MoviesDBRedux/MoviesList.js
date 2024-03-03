import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CardMovie from './CardMovie';
import PaginationNP from './PaginationNP';
import { Row } from 'react-bootstrap';
import { getAllMovie } from './Actions/moviesAction';

const MoviesList = () => {
    const [movies, setMovies] = useState([])
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllMovie());
    },[dispatch])
    
    // get all Movies by axios
    const dataMovies = useSelector((state)=> state.movies)
    useEffect(()=>{
        setMovies(dataMovies)
    },[dataMovies])

    return (
        <Row className='mt-3'>
            {
                movies.length >= 1 ? (
                    movies.map((movie) => {  
                        return(
                            <CardMovie key={movie.id} movie={movie}/>
                        )
                    })
                ) : <h2 className='text-center p-5'>There is no Movies now</h2>
            }
            {
                movies.length >= 1 ? (<PaginationNP/>): null
            }
            
        </Row>
    )
}

export default MoviesList;
