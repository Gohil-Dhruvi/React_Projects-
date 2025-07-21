const initialState = {
  movies: JSON.parse(localStorage.getItem("Movies")) || [],
  movie: null,
  loading: false,
  isCreate: false,
  isUpdate: false,
  errMSG: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        errMSG: action.payload,
      };

    case "ADD_MOVIE": {
      const newMovies = [...state.movies, action.payload];
      localStorage.setItem("Movies", JSON.stringify(newMovies));
      return {
        ...state,
        movies: newMovies,
        isCreate: true,
        loading: false,
        errMSG: "",
      };
    }

    case "GET_ALL_MOVIE": {
      const storedMovies = JSON.parse(localStorage.getItem("Movies")) || [];
      return {
        ...state,
        movies: storedMovies,
        loading: false,
        isCreate: false,
        isUpdate: false,
        errMSG: "",
      };
    }

    case "DELETE_MOVIE": {
      const filteredMovies = state.movies.filter(
        (movie) => movie._id !== action.payload
      );
      localStorage.setItem("Movies", JSON.stringify(filteredMovies));
      return {
        ...state,
        movies: filteredMovies,
      };
    }

    case "GET_SINGLE_MOVIE":
  return {
    ...state,
    movie: action.payload,
  };


    case "UPDATE_MOVIE": {
      const updatedMovies = state.movies.map((movie) =>
        movie._id === action.payload.id ? action.payload : movie
      );
      localStorage.setItem("Movies", JSON.stringify(updatedMovies));
      return {
        ...state,
        movies: updatedMovies,
        movie: null,
        isUpdate: true,
        loading: false,
        errMSG: "",
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
