import React, { useEffect, useState } from 'react'
import { CChartBar, CChartDoughnut } from '@coreui/react-chartjs'
import rank from '../../assets/images/TopListIcons/rank.png'
import { MDBTable, MDBTableBody, MDBDataTable } from 'mdbreact';
import topMovies from "../../data/jsonFiles/topMovies.json";
import doughnutChartData from "../../data/jsonFiles/doughnutChartData.json"
import barChartData from "../../data/jsonFiles/barChartData.json"
import activityFeed from "../../data/jsonFiles/activityFeed.json"
import Dropdown from 'react-dropdown';
import Modal from '../modal/Modal'
import moviesTableData from '../../data/jsonFiles/moviesTableData.json'
import { useDispatch } from "react-redux";
import { setSearchTitle, setSearchYear, setModalShow } from '../../redux/actions/userActions'
import store from '../../redux/store/index'

import { CallGetMoviesFromApi } from '../../APIHelper/apiHelpers';

const Dashboard = () => {
    const dispatch = useDispatch()
    let searchTitle, searchYear, moviesTableDataRows;
    store.subscribe(() => {
        searchTitle = store.getState().userReducer.searchTitle;
        searchYear = store.getState().userReducer.searchYear;
        moviesTableDataRows = store.getState().userReducer.moviesTableDataRows;
        setMovieInformations(store.getState().userReducer.movieInformations);
        setModalShowLocal(store.getState().userReducer.modalShow);
    })
    const [doughnutChartDropdown, setDoughnutChartDropdown] = useState('This Year')
    const [barChartDropdown, setBarChartDropdown] = useState('Last 6 Months')
    const [moviesTableDataLocal, setMoviesTableDataLocal] = useState(moviesTableData)
    const [modalShowLocal, setModalShowLocal] = useState()
    const [movieInformations, setMovieInformations] = useState([])

    function handleSearch(value) {
        dispatch(setSearchTitle(value))
    }
    function handleYear(value) {
        dispatch(setSearchYear(value))
    }
    function changeDoughnutDropdown(value) {
        setDoughnutChartDropdown(value)
    }
    function changeBarChart(value) {
        setBarChartDropdown(value)
    }
    function searchMovie(movieName, movieYear) {
        CallGetMoviesFromApi(movieName, movieYear).then(() => {
            const rows = moviesTableDataRows
            setMoviesTableDataLocal({ ...moviesTableDataLocal, rows })
        })
    }
    function assign() {
        const rows = moviesTableDataRows
        setMoviesTableDataLocal({ ...moviesTableDataLocal, rows })
    }
    useEffect(() => {
        CallGetMoviesFromApi("Batman").then(() => assign())
    }, [])

    const doughnutChartOptions = ['This Year', 'This Month', 'This Week']
    const barChartOptions = ['Last 6 Months', 'Last Week']
    return (
        <div className="row">
            <h1 className="componentTitle">Dashboard</h1>
            <div className="col-fluid leftColumnContent responsive">
                {/* Content of the left column. */}
                {<Modal
                    show={modalShowLocal}
                    onHide={() => dispatch(setModalShow())}
                    title={movieInformations[0]}
                    actors={movieInformations[1]}
                    director={movieInformations[2]}
                    duration={movieInformations[3]}
                    genre={movieInformations[4]}
                    awards={movieInformations[5]}
                    production={movieInformations[6]}
                    released={movieInformations[7]}
                    imdb={movieInformations[8]}
                />}
                <div className="card doughnutChartCard">
                    <div className="d-flex justify-content-between">
                        <div className="card-header cardHeader" > Categories </div>
                        <Dropdown options={doughnutChartOptions} onChange={(e) => { changeDoughnutDropdown(e.value) }} value={doughnutChartOptions[0]} />
                    </div>
                    <div className="card-body">
                        <CChartDoughnut
                            data={{
                                labels: ['Action', 'Comedy', 'Romantic', 'Drama'],
                                datasets: [
                                    {
                                        backgroundColor: ['#4C8DEB', '#5AD6B0', '#FFAB49', '#EE5D70'],
                                        data: [doughnutChartData[doughnutChartDropdown][0].data, doughnutChartData[doughnutChartDropdown][1].data
                                            , doughnutChartData[doughnutChartDropdown][2].data, doughnutChartData[doughnutChartDropdown][3].data],
                                    },
                                ],
                            }}
                            style={{ height: "250px", width: "250px", marginLeft: "auto", marginRight: "auto" }}
                        />
                        {/* </div> */}
                    </div>
                </div>
                <div className="card topMoviesCard">
                    <div className="card-header cardHeader">
                        Top Movies
                    </div>
                    <div className="card-body">
                        <MDBTable responsive
                            maxheight="335px"
                            maxwidth="363px"
                            small
                            borderless

                        >
                            <MDBTableBody>
                                {topMovies.map((item, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td style={{ color: "#4C8DEB", fontSize: "12px", fontWeight: "bold" }}>
                                            {item.name}
                                        </td>
                                        <td>{<img className="topMoviesListRankIcon" src={rank} />}</td>
                                        <td><i className="topMoviesListRank">{item.rank}</i></td>
                                    </tr>
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            </div>
            <div className="col-fluid middleColumnContent responsive">
                {/* Content of the middle column. */}
                <div className="card watchTimeCard">
                    <div className="d-flex justify-content-between">
                        <div className="card-header cardHeader">Watch Time</div>
                        <Dropdown options={barChartOptions} onChange={(e) => { changeBarChart(e.value) }} value={barChartOptions[0]} />
                    </div>
                    <div className="card-body">
                        <CChartBar
                            data={{
                                labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
                                datasets: [
                                    {
                                        label: 'Hour',
                                        backgroundColor: '#5AD6B0',
                                        data: [barChartData[barChartDropdown][0].data, barChartData[barChartDropdown][1].data,
                                        barChartData[barChartDropdown][2].data, barChartData[barChartDropdown][3].data,
                                        barChartData[barChartDropdown][4].data, barChartData[barChartDropdown][5].data]
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </div>
                </div>
                <div className="card movieListCard" >
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <div className="card-header cardHeader">
                                Movies
                            </div>
                            <div id="navbar-search-autocomplete" class="form-outline searchboxMovie">
                                <input type="search" onChange={(e) => { handleSearch(e.target.value) }} id="form1"
                                    class="form-control" />
                                <label class="form-label" for="form1">Movie</label>
                            </div>
                            <div id="navbar-search-autocomplete" class="form-outline searchboxYear">
                                <input type="search" id="form2" onChange={(e) => { handleYear(e.target.value) }}
                                    class="form-control" />
                                <label class="form-label" for="form1">Year</label>
                            </div>
                            <button type="button" onClick={() => { searchMovie(searchTitle, searchYear); }
                            }
                                class="btn btn-primary" >
                                Search
                            </button>
                        </div>
                        <MDBDataTable
                            scrollY
                            data={moviesTableDataLocal}
                            entries={20}
                            responsive
                            small
                            searching={false}
                            sortable={false}
                            displayEntries={false}
                            borderless
                            info={false}
                            maxheight="200px"
                            maxwidth="540px"
                            onClick={() => dispatch(setModalShow())}
                        />
                    </div>
                </div>
            </div >
            <div className="col-fluid rightColumnContent responsive">
                {/* Content of the right column. */}
                <div className="card activityCard" >
                    <div className="card-header cardHeader">
                        Activity
                    </div>
                    <div className="card-body">
                        <div class="activity-feed">
                            {activityFeed.map((item) =>
                                <div class="feed-item">
                                    <div class="date">{item.date}</div>
                                    <div class="feed-text">
                                        <p style={{ fontWeight: "bold", fontSize: "12px", color: "#405169", marginBottom: "6px", lineHeight: "15px" }}>
                                            {item.header}
                                        </p>
                                        <div className="text" style={{ fontWeight: "normal", fontSize: "10px", lineHeight: "13px", color: "#405169" }}>{item.text}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard