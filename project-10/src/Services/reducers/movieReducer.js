const initialState = {
  movies: JSON.parse(localStorage.getItem("Movies")) || [],
  movie: null,
  loading: false,
  isCreate: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE": {
      const newMovies = [...state.movies, action.payload];
      localStorage.setItem("Movies", JSON.stringify(newMovies));
      return {
        ...state,
        movies: newMovies,  
        isCreate: true,
      };
    }

    case "GET_ALL_MOVIE": {
      const storedMovies = JSON.parse(localStorage.getItem("Movies")) || [];
      return {
        ...state,
        movies: storedMovies,
        loading: false,
      };
    }

    case "DELETE_MOVIE": {
      const filteredMovies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      localStorage.setItem("Movies", JSON.stringify(filteredMovies));
      return {
        ...state,
        movies: filteredMovies,
      };
    }

    case "GET_SINGLE_MOVIE": {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      return {
        ...state,
        movie: movie || null, // safeguard if not found
      };
    }

    case "UPDATE_MOVIE": {
      const updatedMovies = state.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie
      );
      localStorage.setItem("Movies", JSON.stringify(updatedMovies));
      return {
        ...state,
        movies: updatedMovies,
        movie: null, 
      };
    }

    default:
      return state;
  }
};

export default movieReducer;
