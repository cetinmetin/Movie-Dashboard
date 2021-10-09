import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'
import { SidebarNavigations } from './SidebarNavigations'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import SidebarNavs from '../SidebarNavs'
import { cilCircle } from '@coreui/icons'
import sidebarMenuBrand from '../assets/images/SidebarIcons/1.png'
const Sidebar = () => {
    return (
        <CSidebar style={{ backgroundColor: "#4C8DEB",height:"809px",width:"60px" }}
            position="fixed"
            unfoldable={true}
            popperArrow={false}
            narrow={true}
        >
            <CSidebarBrand className="d-none d-md-flex" to="/">
                <img src={sidebarMenuBrand} style={{ height: '100%', width: '100%', display: 'block' }} />
            </CSidebarBrand>
            <CSidebarNav>
                <SimpleBar>
                    <SidebarNavigations items={SidebarNavs} />
                </SimpleBar>
            </CSidebarNav>
            {/* <CSidebarToggler
                className="d-none d-lg-flex"
                onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
            /> */}
        </CSidebar>
    )
}

export default React.memo(Sidebar)