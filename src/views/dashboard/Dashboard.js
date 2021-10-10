import React, { lazy, useEffect, useState } from 'react'

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
} from '@coreui/icons'
import {
    CChartBar,
    CChartDoughnut,
    CChartLine,
    CChartPie,
    CChartPolarArea,
    CChartRadar,
} from '@coreui/react-chartjs'
import rank from '../../assets/images/TopListIcons/rank.png'
import { MDBTable, MDBTableBody, MDBTableHead, MDBDataTable, MDBDataTableV5 } from 'mdbreact';
import ReactSearchBox from 'react-search-box'
import topMovies from "../../data/jsonFiles/topMovies.json";
import doughnutChartData from "../../data/jsonFiles/doughnutChartData.json"
import barChartData from "../../data/jsonFiles/barChartData.json"
import Dropdown from 'react-dropdown';
import Modal from '../modal/Modal'

const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand'))

const Dashboard = () => {
    const [searchTitle, setSearchTitle] = useState()
    const [searchYear, setSearchYear] = useState()
    const [doughnutChartDropdown, setDoughnutChartDropdown] = useState('This Year')
    const [barChartDropdown, setBarChartDropdown] = useState('Last 6 Months')
    const [imdbIDList, setImdbIDList] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [modalTitle, setModalTitle] = useState()
    const [modalActors, setModalActors] = useState()
    const [modalDirectors, setModalDirectors] = useState()
    const [modalDuration, setModalDuration] = useState()
    const [modalGenre, setModalGenre] = useState()
    const [modalAwards, setModalAwards] = useState()
    const [modalProduction, setModalProduction] = useState()
    const [modalReleased, setModalReleased] = useState()
    const [modalImdbRating, setModalImdbRating] = useState()
    const [data, setData] = useState({
        columns: [
            {
                field: 'index',
                sort: 'asc',
                width: 30
            },
            {
                field: 'name',
                sort: 'asc',
                width: 50
            },
            {
                field: 'year',
                sort: 'asc',
                width: 50
            },
            {
                field: 'imdbID',
                sort: 'asc',
                width: 50
            }
        ],
        rows: []
    })
    function handleSearch(value) {
        setSearchTitle(value)
    }
    function handleYear(value) {
        setSearchYear(value)
    }
    function changeDoughnutDropdown(value) {
        setDoughnutChartDropdown(value)
    }
    function changeBarChart(value) {
        setBarChartDropdown(value)
    }
    async function CallGetMoviesFromApi(movieName, year) {
        reset()
        getImdbID(searchTitle)
        const rows = JSON.parse(JSON.stringify(data.rows));
        await getMoviesFromApi(movieName, year).then(response => {
            if (response.Response !== 'False')
                response.Search.map((item, index) => {
                    rows.push({
                        index: index + 1,
                        name: <a type="button" style={{ color: "#4C8DEB" }}
                            onClick={() => getSearchedMovieDetailsFromApi(index)}
                        >
                            {item.Title}
                        </a>, year: item.Year,
                        imdbID: item.imdbID
                    })
                })
            else
                console.log('Movie Not Found')
        })
        setData({ ...data, rows });
    }
    function reset() {
        data.rows = []
        setData({ ...data, data })
        setSearchYear('')
        setSearchTitle('')
        setImdbIDList([])
    }
    useEffect(() => {
        reset()
        CallGetMoviesFromApi()
    }, [])
    async function getImdbID(movieName) {
        try {
            await getMoviesFromApi(movieName).then(response => {
                if (response.Response !== 'False') {
                    response.Search.map((item, index) => { imdbIDList[index] = item.imdbID })
                }
            })
            setImdbIDList(imdbIDList)
        } catch (e) {
            console.log("Error when getimdbid" + e)
        }
    }
    function openModal(modalTitle, modalActors, modalDirectors, modalDuration, modalGenre, modalAwards, modalProduction,
        modalReleased, modalImdbRating) {
        setModalShow(!modalShow)
        setModalTitle(modalTitle)
        setModalActors(modalActors)
        setModalDirectors(modalDirectors)
        setModalDuration(modalDuration)
        setModalGenre(modalGenre)
        setModalAwards(modalAwards)
        setModalProduction(modalProduction)
        setModalReleased(modalReleased)
        setModalImdbRating(modalImdbRating)
    }
    async function getSearchedMovieDetailsFromApi(responseIndex) {
        try {
            let url = `http://www.omdbapi.com/?i=${imdbIDList[responseIndex]}&apikey=f4fdd752`
            let response = await fetch(url);
            let responseApi = await response.json();
            console.log(responseApi)
            openModal(responseApi.Title, responseApi.Actors, responseApi.Director, responseApi.Runtime,
                responseApi.Genre, responseApi.Awards, responseApi.Production, responseApi.Released, responseApi.imdbRating)
        } catch (e) {
            console.log("Error when getSearchedMovieDetailsFromApi" + e)
        }
    }
    async function getMoviesFromApi(movieName, year) {
        try {
            let url = ""
            let urlForDetails = ""
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
    const options = ['This Year', 'This Month', 'This Week']
    const options2 = ['Last 6 Months', 'Last Week']
    return (
        <div className="row">
            <div className="col-fluid ilkDivDeneme responsive">
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={modalTitle}
                    Actors={modalActors}
                    Directors={modalDirectors}
                    Duration={modalDuration}
                    Genre={modalGenre}
                    Awards={modalAwards}
                    Production={modalProduction}
                    Released={modalReleased}
                    imdbRating={modalImdbRating}
                />
                {/* Content of the left column. */}
                <div className="card chartDoughnutCardBody">
                    <div className="d-flex justify-content-between">
                        <div className="card-header cardHeader" > Categories </div>
                        <Dropdown options={options} onChange={(e) => { changeDoughnutDropdown(e.value) }} value={options[0]} />
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
                <div className="card denemeBirinciAlt">
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
                                        <td style={{ color: "#4C8DEB" }}>{item.name}</td>
                                        <td>{<img className="topMoviesListRankIcon" src={rank} />}</td>
                                        <td><i className="topMoviesListRank">{item.rank}</i></td>
                                    </tr>
                                )}
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            </div>
            <div className="col-fluid ikinciDivDeneme responsive">
                {/* Content of the middle column. */}
                <div className="card ikinciSutunBirinciSatır">
                    <div className="d-flex justify-content-between">
                        <div className="card-header cardHeader">Watch Time </div>
                        <Dropdown options={options2} onChange={(e) => { changeBarChart(e.value) }} value={options2[0]} />
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
                <div className="card birinciSatirIkinciSutun" >
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <div className="card-header cardHeader">
                                Movies
                            </div>
                            <div id="navbar-search-autocomplete" class="form-outline firstSearch">
                                <input type="search" onChange={(e) => { handleSearch(e.target.value) }} id="form1"
                                    class="form-control" />
                                <label class="form-label" for="form1">Movie</label>
                            </div>
                            <div id="navbar-search-autocomplete" class="form-outline secondSearch">
                                <input type="search" id="form2" onChange={(e) => { handleYear(e.target.value) }}
                                    class="form-control" />
                                <label class="form-label" for="form1">Year</label>
                            </div>
                            <button type="button" onClick={() => CallGetMoviesFromApi(searchTitle, searchYear)}
                                class="btn btn-primary" >
                                Search
                            </button>
                        </div>
                        <MDBDataTable
                            scrollY
                            data={data}
                            entries={10}
                            responsive
                            small
                            searching={false}
                            sortable={false}
                            displayEntries={false}
                            borderless
                            info={false}
                            maxHeight="200px"
                            maxWidth="540px"
                        />
                        {console.log(data.rows)}

                    </div>
                </div>
            </div >
            <div className="col-fluid ucuncuDivDeneme responsive">
                {/* Content of the right column. */}
                <div className="card ucuncuSutunBirinciSatir" >
                    <div className="card-header cardHeader">
                        Activity
                    </div>
                    <div className="card-body">
                        <CChartBar
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        label: 'Hour',
                                        backgroundColor: '#5AD6B0',
                                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dashboard