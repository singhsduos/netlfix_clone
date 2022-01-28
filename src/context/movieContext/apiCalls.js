import axios from "axios";
import {
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("https://neelesh-netflix.herokuapp.com/api/movies/", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axios.post("https://neelesh-netflix.herokuapp.com/api/movies/", movie, {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjQxMWEzZGVjNTA0MTg1ZTY2MmY4MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDMzODUyNjksImV4cCI6MTY0MzgxNzI2OX0.16ria1jF86RNwg6GExlYGbLqLsPNqBqkB9ZCxtI6dkE",
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }
};

//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("https://neelesh-netflix.herokuapp.com/api/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
};