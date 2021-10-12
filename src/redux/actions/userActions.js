import {
    SEARCH_TITLE, SEARCH_YEAR, IMDBID_LIST, INDEXOF_DETAILED_MOVIE, MOVIES_TABLE_DATA, MOVIE_INFORMATIONS, MODAL_SHOW,
    REVIEWED_MOVIE_COUNTER
} from './userActionTypes'

export const setSearchTitle = (newStatus) => ({
    type: SEARCH_TITLE,
    status: newStatus
})

export const setSearchYear = (newStatus) => ({
    type: SEARCH_YEAR,
    status: newStatus
})

export const setImdbIDList = (newStatus) => ({
    type: IMDBID_LIST,
    status: newStatus
})

export const setIndexOfDetailedMovie = (newStatus) => ({
    type: INDEXOF_DETAILED_MOVIE,
    status: newStatus
})

export const setMoviesTableData = (newStatus) => ({
    type: MOVIES_TABLE_DATA,
    status: newStatus
})

export const setMovieInformations = (title, actors, director, duration, genre, awards, production, released, imdb) => ({
    type: MOVIE_INFORMATIONS,
    title: title,
    actors: actors,
    director: director,
    duration: duration,
    genre: genre,
    awards: awards,
    production: production,
    released: released,
    imdb: imdb
})

export const setModalShow = () => ({
    type: MODAL_SHOW
})

export const increaseCounter = () => ({
    type: REVIEWED_MOVIE_COUNTER
})