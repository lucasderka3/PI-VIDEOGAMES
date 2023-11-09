import axios from 'axios';
import { GET_GAMES, GET_DETAIL, GET_BY_NAME, GET_GENRES, POST_GAME, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_GENRES, FILTER_CREATED } from './actions-type';


export const postGame = (newGame) => {
    
    return async (dispatch) => {
        try {
            const endPoint = "http://127.0.0.1:3001/videogames";
            const { data } = await axios({
                url: endPoint,
                method:"POST",
                data:newGame
            })
            dispatch({
                type: POST_GAME,
                payload:data
            })
        } catch (error) {
            error
        }
    }
}

export const getGames = () => {
    return async (dispatch) => {
        try {
            const videogames = await axios.get('http://127.0.0.1:3001/videogames');
            return dispatch({
                type: GET_GAMES,
                payload: videogames.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
}

export const getGameByName = (name) => {
    return async (dispatch) => {
        try {
            let videogames = await axios.get(`http://127.0.0.1:3001/videogames/name?name=${name}`);
            return dispatch({
                type: GET_BY_NAME,
                payload: videogames.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
}


export const getDetailById = (id) => {
    return async (dispatch) => {
        try {
            const detail = await axios.get(`http://127.0.0.1:3001/videogames/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: detail.data
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
}


export const getGenres = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://127.0.0.1:3001/genres`);
            const genres = response.data;
            
            return dispatch({
                type: GET_GENRES,
                payload: genres
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
}


export const orderByName = (payload) => {
    return{
        type: ORDER_BY_NAME,
        payload,
    };
} 

export const orderByRating = (payload) => {
    return{
        type: ORDER_BY_RATING,
        payload,
    }
};

export const filterGenres = (payload) => {
    return{
        type: FILTER_GENRES,
        payload,
    }
};

export const filterCreated = (payload) => {
    return{
        type: FILTER_CREATED,
        payload,
    }
}