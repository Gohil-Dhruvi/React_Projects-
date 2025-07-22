import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../Config/firebaseConfig';

export const loading = () => ({ type: "LOADING" });
export const errorMessage = (err) => ({ type: "ERROR", payload: err });
export const getAllMovies = (data) => ({ type: "GET_ALL_MOVIE", payload: data });
export const addMovie = (data) => ({ type: "ADD_MOVIE", payload: data });
export const deleteMovie = (id) => ({ type: "DELETE_MOVIE", payload: id });
export const getSingleMovie = (data) => ({ type: "GET_SINGLE_MOVIE", payload: data });
export const updateMovie = (data) => ({ type: "UPDATE_MOVIE", payload: data });

export const getAllMoviesAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let result = [];
            const querySnapshot = await getDocs(collection(db, "movies"));
            querySnapshot.forEach(doc => {
                result.push({ id: doc.id, ...doc.data() }); 
            });
            dispatch(getAllMovies(result));
        } catch (error) {
            console.log(error);
            dispatch(errorMessage(error.message));
        }
    }
}

export const addMovieAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            // await addDoc(collection(db, "products"), data)  // auto id generate
            await setDoc(doc(db, "movies", data.id), data)    // manual id
            dispatch(addMovie(data))
        } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
        }
    }   
}

export const deleteMovieAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await deleteDoc(doc(db, "movies", id))
            dispatch(deleteMovie(id))
        } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
        }       
    }   
}

export const getSingleMovieAsync = (id) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await getDoc(doc(db, "movies", id))
            if(res.data())
                dispatch(getSingleMovie(res.data()))
        } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
        }      
    }   
}

export const updateMovieAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await updateDoc(doc(db, "movies", data.id), data);
            dispatch(updateMovie(data))
        } catch (error) {
            console.log(error)
            dispatch(errorMessage(error.message))
        }        
    }   
}