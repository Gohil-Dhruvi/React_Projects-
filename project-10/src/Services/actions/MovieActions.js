import axios from 'axios';

// Synchronous Actions

export const addMovie = () => {
  return {
    type: "ADD_MOVIE",
  };
};

export const getAllMovies = (data) => {
  return {
    type: "GET_ALL_MOVIE",
    payload: data
  };
};

export const deleteMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: id
  };
};

export const getSingleMovie = (data) => {
  return {
    type: "GET_SINGLE_MOVIE",
    payload: data
  };
};

export const updateMovie = () => {
  return {
    type: "UPDATE_MOVIE",
  };
};

export const loading = () => {
  return {
    type: "LOADING",
  };
};

export const errorMessage = (err) => {
  return {
    type: "ERROR",
    payload: err
  };
};

// Async Actions (Thunk)

export const getAllMoviesAsync = () => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await axios.get("http://localhost:3000/movies");
      dispatch(getAllMovies(res.data));
    } catch (error) {
      console.error(error);
      dispatch(errorMessage(error.message));
    }
  };
};

export const addMovieAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.post("http://localhost:3000/movies", data);
      dispatch(getAllMoviesAsync());
      dispatch(addMovie());
    } catch (error) {
      console.error(error);
      dispatch(errorMessage(error.message));
    }
  };
};

export const deleteMovieAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.delete(`http://localhost:3000/movies/${id}`);
      dispatch(getAllMoviesAsync());
    } catch (error) {
      console.error(error);
      dispatch(errorMessage(error.message));
    }
  };
};

export const getSingleMovieAsync = (id) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const res = await axios.get(`http://localhost:3000/movies/${id}`);
      dispatch(getSingleMovie(res.data));
    } catch (error) {
      console.error(error);
      dispatch(errorMessage(error.message));
    }
  };
};

export const updateMovieAsync = (data) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await axios.put(`http://localhost:3000/movies/${data.id}`, data);
      dispatch(getAllMoviesAsync());
      dispatch(updateMovie());
    } catch (error) {
      console.error(error);
      dispatch(errorMessage(error.message));
    }
  };
};

