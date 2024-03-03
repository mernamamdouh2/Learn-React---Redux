import React from 'react'
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import PaginationNP from './PaginationNP';

const MoviesList = ({movies, getCurrentPage, pageCount}) => {
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
                movies.length >= 1 ? (<PaginationNP getCurrentPage={getCurrentPage} pageCount={pageCount}/>): null
            }
            
        </Row>
    )
}

export default MoviesList;
