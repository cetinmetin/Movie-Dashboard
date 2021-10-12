import React from 'react'
import CIcon from '@coreui/icons-react'
import home from './assets/images/SidebarIcons/home.png'
import social from './assets/images/SidebarIcons/social.png'
import document from './assets/images/SidebarIcons/document.png'
import tag from './assets/images/SidebarIcons/tag.png'
import {
    cilBell,
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDrop,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilSpeedometer,
    cilStar,
    cilHome
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const iconStyles = {
    left: "50%", top: "50%", marginTop: "35%",
}
const sidebarNavs = [
    {
        component: CNavItem,
        // name: 'Dashboard',
        to: '/dashboard',
        icon: <img src={home} style={iconStyles} />,
        // badge: {
        //     color: 'info',
        //     text: 'NEW',
        // },
    },
    {
        component: CNavItem,
        // name: 'Dashboard',
        to: '/social',
        icon: <img src={social} style={iconStyles} />,
        // badge: {
        //     color: 'info',
        //     text: 'NEW',
        // },
    },
    {
        component: CNavItem,
        // name: 'Dashboard',
        to: '/report',
        icon: <img src={document} style={iconStyles} />,
        // badge: {
        //     color: 'info',
        //     text: 'NEW',
        // },
    },
    {
        component: CNavItem,
        // name: 'Dashboard',
        to: '/tagPage',
        icon: <img src={tag} style={iconStyles} />,
        // badge: {
        //     color: 'info',
        //     text: 'NEW',
        // },
    }
]

export default sidebarNavs
