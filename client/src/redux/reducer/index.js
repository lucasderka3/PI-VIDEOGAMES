import { GET_GAMES, GET_DETAIL, GET_BY_NAME, GET_GENRES, POST_GAME, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_GENRES, FILTER_CREATED } from "../actions/actions-type";

const initialState = {
    videogames: [],
    allVideogames: [],
    allGenres: [],
    gameDetail: {},
}

function reducer (state = initialState, action){
    switch(action.type){
        case GET_GAMES: 
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }

        case GET_BY_NAME:
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        
        case GET_DETAIL:
            return{
                ...state,
                gameDetail: action.payload
            }

        case GET_GENRES:
            return{
                ...state,
                allGenres: action.payload
            }
        case POST_GAME:
            return{
                ...state,
                videogames: [payload, ...state.videogames]
            }

        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'A-Z'
                    ? state.videogames.sort(function (a, b){
                                if (a.name > b.name) {
                                    return 1;
                                }
                                if(b.name > a.name){
                                    return -1;
                                }
                                return 0;
                            })
                    : state.videogames.sort(function (a, b) {
                                if(a.name > b.name){
                                    return -1;
                                }
                                if(b.name > a.name){
                                    return 1;
                                }
                                return 0
                            });
            return{
                ...state,
                videogames: sortedArr
            }
        
        case ORDER_BY_RATING:
            let sortedArr2 = action.payload === 'L-H'
                ? state.videogames.sort(function(a,b) {
                    if (a.rating > b.rating){
                        return 1;
                    }
                    if(b.rating > a.rating){
                        return -1;
                    }
                    return 0;
                })
                : state.videogames.sort(function(a, b) {
                    if(a.rating > b.rating){
                        return -1;
                    }
                    if(b.rating > a.rating){
                        return 1;
                    }
                    return 0
                });
            return{
                ...state,
                videogames: sortedArr2
            }
        
        case FILTER_GENRES:
            const gamesFiltered = action.payload;
            state.videogames = state.allVideogames.filter((videogame) => videogame.genres?.includes(gamesFiltered));
            if(action.payload === 'all') state.videogames = state.allVideogames;
            if(state.videogames.length === 0){
                alert ('Game not found!');
                state.videogames = state.allVideogames;
            }
            return{
                ...state,
                videogames: state.videogames
            }
        
        case FILTER_CREATED:
            const filterCreated = action.payload === 'db'
                ? state.allVideogames.filter((e) => e.createdInDb)
                : state.allVideogames.filter((e) => !e.createdInDb);
            return{
                ...state,
                videogames: action.payload === 'origin' 
                            ? state.allVideogames
                            : filterCreated
            };
        
        default:
            return state
    }
}

export default reducer;


