import store from '../redux/store/index'
import { useDispatch } from "react-redux";
import { setIndexOfDetailedMovie, setImdbIDList, setMoviesTableData, setMovieInformations, increaseCounter } from '../redux/actions/userActions'
import React, { lazy, useEffect, useState } from 'react'
import moviesTableData from '../data/jsonFiles/moviesTableData.json'

let searchTitle, searchYear, indexOfDetailedMovie, imdbIDList, moviesTableDataRows, movieInformations;
store.subscribe(() => {
    searchTitle = store.getState().userReducer.searchTitle;
    searchYear = store.getState().userReducer.searchYear;
    indexOfDetailedMovie = store.getState().userReducer.indexOfDetailedMovie;
    imdbIDList = store.getState().userReducer.imdbIDList;
    moviesTableDataRows = store.getState().userReducer.moviesTableDataRows;
    movieInformations = store.getState().userReducer.movieInformations;
})



export async function CallGetMoviesFromApi(movieName, year) {
    //reset()
    try {
        await getImdbID(movieName, year)
        const rows = JSON.parse(JSON.stringify(moviesTableData.rows));
        await getMoviesFromApi(movieName, year).then(response => {
            if (response.Response !== 'False') {
                response.Search.map((item, index) => {
                    rows[index] = ({
                        index: index + 1,
                        name: <a type="button" style={{ color: "#4C8DEB", fontWeight: "bold", fontSize: "12px", lineHeight: "15px" }}
                            onClick={() => {
                                getSearchedMovieDetailsFromApi(index)
                            }}
                        >
                            {item.Title}
                        </a>, year: item.Year,
                        imdbID: item.imdbID
                    })
                })
            }
            else
                console.log('Movie Not Found')
        })
        store.dispatch(setMoviesTableData(rows));
    } catch (e) {
        console.log("Error" + e)
    }
}

export async function getImdbID(movieName, year) {
    try {
        let imdbIDListTemp = []
        await getMoviesFromApi(movieName, year).then(response => {
            if (response.Response !== 'False') {
                response.Search.map((item, index) => { imdbIDListTemp[index] = item.imdbID })
            }
        })
        store.dispatch(setImdbIDList(imdbIDListTemp))
    } catch (e) {
        console.log("Error when getimdbid" + e)
    }
}

export async function getSearchedMovieDetailsFromApi(responseIndex) {
    try {
        let url = `http://www.omdbapi.com/?i=${imdbIDList[responseIndex]}&apikey=f4fdd752`
        let response = await fetch(url);
        let responseApi = await response.json();
        if (response.Response !== 'False') {
            fillModal(responseApi.Title, responseApi.Actors, responseApi.Director, responseApi.Runtime,
                responseApi.Genre, responseApi.Awards, responseApi.Production, responseApi.Released, responseApi.imdbRating)
        }
    } catch (e) {
        console.log("Error when getSearchedMovieDetailsFromApi" + e)
    }
}

export async function getMoviesFromApi(movieName, year) {
    try {
        let url = ""
        if (movieName === undefined || movieName === '') {
            if (year === undefined || year === '')
                url = "http://www.omdbapi.com/?s=batman&apikey=f4fdd752"
            else
                url = `http://www.omdbapi.com/?s=batman&y=${year}&apikey=f4fdd752`
        }
        else {
            if (year === undefined || year === '')
                url = `http://www.omdbapi.com/?s=${movieName}&apikey=f4fdd752`
            else
                url = `http://www.omdbapi.com/?s=${movieName}&y=${year}&apikey=f4fdd752`

        }
        let response = await fetch(url);
        let responseApi = await response.json();
        return responseApi;

    } catch (error) {
        console.error(error);
    }
}

export function fillModal(title, actors, director, duration, genre, awards, production, released, imdb) {
    store.dispatch(setMovieInformations(title, actors, director, duration, genre, awards, production, released, imdb))
    store.dispatch(increaseCounter())
}