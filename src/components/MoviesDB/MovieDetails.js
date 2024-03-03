import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
    const paramID = useParams();
    const [movie, setMovie] = useState([])


    // get Movies Details by axios
    const getMovieDetails = async () =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${paramID.id}?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US`)
        setMovie(res.data);
    }

    useEffect(()=>{
        getMovieDetails();
    })
    
    return (
        <div>
            <Row className='justify-content-center'>
                <Col md="12" xs="12" sm="12" className='mt-4'>
                    <div className='card-details d-flex align-items-center'>
                        <img className='img-movie w-30' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} alt='img movie'/>
                        <div className='justify-content-center text-center mx-auto'>
                            <p className='card-text-details border-bottom'>
                                Movie Name : {movie.title}
                            </p>
                            <p className='card-text-details border-bottom'>
                                Release Date : {movie.release_date}
                            </p>
                            <p className='card-text-details border-bottom'>
                                Vote Count : {movie.vote_count}
                            </p>
                            <p className='card-text-details border-bottom'>
                                Vote Average : {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col md="12" xs="12" sm="12" className='mt-1'>
                    <div className='card-story d-flex flex-column align-items-start'>
                        <img className='img-movie w-30' src='' alt='img movie'/>
                        <div className='text-end p-4'>
                            <p className='card-text-title border-bottom'>
                                Movie Story: 
                            </p>
                        </div>
                        <div className='text-end px-2'>
                            <p className='card-text-story'> 
                                {movie.overview}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col md="10" xs="12" sm="12" className='mt-2 d-flex justify-content-center'>
                    <Link to='/moviesDB'>
                        <button style={{backgroundColor: "#b45b35", border: "none"}} className='btn btn-primary mx-2'>
                            Back to Home
                        </button>
                    </Link>
                    <a href={movie.homepage}>
                        <button style={{backgroundColor: "#b45b35", border: "none"}} className='btn btn-primary'>
                            Watch Movie
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails;
