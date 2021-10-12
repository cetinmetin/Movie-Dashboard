import React from 'react'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { SidebarNavigations } from './SidebarNavigations'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import SidebarNavs from '../SidebarNavs'
import sidebarMenuBrand from '../assets/images/SidebarIcons/1.png'

const sideBarStyle = {
    backgroundColor: "#4C8DEB",
    height: "809px",
    width: "60px"
}
const sideBarBrand = {
    height: '100%',
    width: '100%',
    display: 'block'
}
const Sidebar = () => {
    return (
        <CSidebar style={sideBarStyle}
            position="fixed"
            unfoldable={true}
            popperArrow={false}
            narrow={true}
        >
            <CSidebarBrand className="d-none d-md-flex" to="/">
                <img src={sidebarMenuBrand} style={sideBarBrand} />
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