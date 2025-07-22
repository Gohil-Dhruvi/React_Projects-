import axios from "axios";

// Action creators
export const loading = () => ({ type: "LOADING" });
export const errorMessage = (err) => ({ type: "ERROR", payload: err });
export const getAllMovies = (data) => ({ type: "GET_ALL_MOVIE", payload: data });
export const addMovie = (data) => ({ type: "ADD_MOVIE", payload: data });
export const deleteMovie = (id) => ({ type: "DELETE_MOVIE", payload: id });
export const getSingleMovie = (data) => ({ type: "GET_SINGLE_MOVIE", payload: data });
export const updateMovie = (data) => ({ type: "UPDATE_MOVIE", payload: data });

// Thunk async actions
export const getAllMoviesAsync = () => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.get("http://localhost:3000/movies");
    dispatch(getAllMovies(res.data));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const addMovieAsync = (data) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.post("http://localhost:3000/movies", data);
    dispatch(addMovie(res.data));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const deleteMovieAsync = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.delete(`http://localhost:3000/movies/${id}`);
    dispatch(deleteMovie(id));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const getSingleMovieAsync = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.get(`http://localhost:3000/movies/${id}`);
    dispatch(getSingleMovie(res.data));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};

export const updateMovieAsync = (data) => async (dispatch) => {
  dispatch(loading());
  try {
    const res = await axios.put(`http://localhost:3000/movies/${data.id}`, data);
    dispatch(updateMovie(res.data));
  } catch (err) {
    dispatch(errorMessage(err.message));
  }
};
