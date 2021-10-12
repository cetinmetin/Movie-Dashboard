import {
    SEARCH_TITLE, SEARCH_YEAR, IMDBID_LIST, INDEXOF_DETAILED_MOVIE, MOVIES_TABLE_DATA,
    MOVIE_INFORMATIONS, MODAL_SHOW, REVIEWED_MOVIE_COUNTER
} from "../actions/userActionTypes";

const initialState = {
    searchTitle: '',
    searchYear: '',
    imdbIDList: [],
    indexOfDetailedMovie: '',
    moviesTableDataRows: [],
    movieInformations: [],
    modalShow: false,
    reviewedMovieCounter: 0
}

export default (payload = initialState, action) => {
    switch (action.type) {
        case SEARCH_TITLE:
            return {
                ...payload,
                searchTitle: action.status
            }
        case SEARCH_YEAR:
            return {
                ...payload,
                searchYear: action.status
            }
        case IMDBID_LIST:
            return {
                ...payload,
                imdbIDList: action.status
            }
        case INDEXOF_DETAILED_MOVIE:
            return {
                ...payload,
                indexOfDetailedMovie: action.status
            }
        case MOVIES_TABLE_DATA:
            return {
                ...payload,
                moviesTableDataRows: action.status
            }
        case MOVIE_INFORMATIONS:
            return {
                ...payload,
                movieInformations: [
                    action.title, action.actors, action.director, action.duration,
                    action.genre, action.awards, action.production, action.released,
                    action.imdb
                ]
            }
        case MODAL_SHOW:
            return {
                ...payload,
                modalShow: !payload.modalShow
            }
        case REVIEWED_MOVIE_COUNTER:
            return {
                ...payload,
                reviewedMovieCounter: payload.reviewedMovieCounter + 1
            }
        default:
            return payload
    }
}