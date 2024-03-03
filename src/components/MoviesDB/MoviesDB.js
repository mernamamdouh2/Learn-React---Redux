// import {BrowserRouter, Route, Routes} from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { Container } from 'react-bootstrap';
import MoviesList from './MoviesList';
import NavBar from './NavBar';
import axios from 'axios';

// import MovieDetails from './MovieDetails';




const MoviesDB = () => {
    const [movies, setMovies] = useState([])
    const [pageCount, setPageCount] = useState(0)

    // get all Movies by axios
    const getAllMovies = async () =>{
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US&page=1')
        setMovies(res.data.results);
        setPageCount(res.data.total_pages)
    }

    useEffect(()=>{
        getAllMovies();
    },[])

    // search from Movies by axios
    const searchFromMovies = async (word) =>{
        if(word === '') {
            getAllMovies();
        }else {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US&page=1&query=${word}`)
            setMovies(res.data.results);
            setPageCount(res.data.total_pages)
        }
    }

    // get Current Page by axios
    const getCurrentPage = async (page) =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US&page=${page}`)
        setMovies(res.data.results);
        setPageCount(res.data.total_pages)
    }

    return (
        <div className='font color-body'>
            <NavBar search={searchFromMovies}/>
            <Container>
                <MoviesList movies={movies} getCurrentPage={getCurrentPage} pageCount={pageCount}/>
                {/* <BrowserRouter>
                    <Routes>
                        <Route path='/moviesDB' element={<MoviesList movies={movies} getCurrentPage={getCurrentPage} pageCount={pageCount}/>}/>
                        <Route path='/movie/:id' element={<MovieDetails/>}/>
                    </Routes>
                </BrowserRouter> */}
            </Container>
        </div>
    )
}

export default MoviesDB;


// Using https://www.themoviedb.org/, after join and login 
// click on More tap then API 
// then click on Documentation
// Our primary documentation is located at developer.themoviedb.org
// the click on API Reference
// choose movie list popular, then get the link and get API Key from my setting account
// https://api.themoviedb.org/3/movie/popular?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US&page=1 
// open thunder client to put this link (get method) make send request to show all key in JSON code
// to make search by name of Movie we need to add parameters "query" : "any word" get this link
// https://api.themoviedb.org/3/search/movie?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US&page=1&query=vemon
// to make movie details page  we need id of each movie so we can use like "id": "220683" on this link
// https://api.themoviedb.org/3/movie/762433?api_key=60563b0f79cd7ecbe87409a3b17a6a74&language=en-US