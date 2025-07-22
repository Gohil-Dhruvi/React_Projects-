const initialState = {
  movies: [],
  movie: null,
  loading: false,
  errMSG: "",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, errMSG: "" };
    case "ERROR":
      return { ...state, loading: false, errMSG: action.payload };

    case "GET_ALL_MOVIE":
      return { ...state, loading: false, movies: action.payload, errMSG: "" };

    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, action.payload], loading: false };

    case "DELETE_MOVIE":
      return {
        ...state,
        loading: false,
        movies: state.movies.filter((m) => m.id !== action.payload),
      };

    case "GET_SINGLE_MOVIE":
      return { ...state, loading: false, movie: action.payload };

    case "UPDATE_MOVIE":
      return {
        ...state,
        loading: false,
        movies: state.movies.map((m) => (m.id === action.payload.id ? action.payload : m)),
        movie: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
