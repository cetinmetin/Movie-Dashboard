import React, { lazy } from 'react'

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
import { List, ListItem } from "@react-md/list";

const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand'))

const Dashboard = () => {
    return (
        <div class="row">
            <div class="col-fluid ilkDivDeneme responsive">
                {/* Content of the left column. */}
                <div class="card chartDoughnutCardBody">
                    <div class="card-header" >Categories</div>
                    <div class="card-body">
                        <CChartDoughnut
                            data={{
                                labels: ['Action', 'Comedy', 'Romantic', 'Drama'],
                                datasets: [
                                    {
                                        backgroundColor: ['#4C8DEB', '#5AD6B0', '#FFAB49', '#EE5D70'],
                                        data: [40, 20, 80, 10],
                                    },
                                ],
                            }}
                            style={{ height: "250px", width: "250px", marginLeft: "auto", marginRight: "auto" }}
                        />
                        {/* </div> */}
                    </div>
                </div>
                <div class="card denemeBirinciAlt">
                    <div class="card-header">
                        Watch Time
                    </div>
                    <div class="card-body">
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
            <div class="col-fluid ikinciDivDeneme responsive">
                {/* Content of the middle column. */}
                <div class="card ikinciSutunBirinciSatır">
                    <div class="card-header">
                        Watch Time
                    </div>
                    <div class="card-body">
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
                <div class="card birinciSatirIkinciSutun" >
                    <div class="card-header">
                        Watch Time
                    </div>
                    <div class="card-body">
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
            <div class="col-fluid ucuncuDivDeneme responsive">
                {/* Content of the right column. */}
                <div class="card ucuncuSutunBirinciSatir" >
                    <div class="card-header">
                        Watch Time
                    </div>
                    <div class="card-body">
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
        </div>
    )
}

export default Dashboard