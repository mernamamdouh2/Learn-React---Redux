import { AllMovies, MovieApi } from "../Type/moviesType"

import axios from 'axios';

export const getAllMovie = ()=>{
    return async (dispatch) => {
        const res = await axios.get(MovieApi)
        dispatch({
            type: AllMovies, data: res.data.results, pages: res.data.total_pages
        })
    }
}

export const getMovieSearch = (word)=>{
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3c7df986f40335c058ff9eb83f53d8b9&language=en-US&page=1&query=${word}`)
        dispatch({
            type: AllMovies, data: res.data.results, pages: res.data.total_pages
        })
    }
}

export const getPage = (page)=>{
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3c7df986f40335c058ff9eb83f53d8b9&language=en-US&page=${page}`)
        dispatch({
            type: AllMovies, data: res.data.results, pages: res.data.total_pages
        })
    }
}