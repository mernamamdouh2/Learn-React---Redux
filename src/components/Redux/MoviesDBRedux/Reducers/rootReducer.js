import { combineReducers } from "redux";
import { moviesReducer } from "./MoviesReducer";

export const rootReducer = combineReducers({
    Movies: moviesReducer,
})