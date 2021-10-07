import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
    CAvatar
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import ReactSearchBox from 'react-search-box'
import notifications from '../assets/images/HeaderIcons/notifications.png'
import avatar from '../assets/images/HeaderIcons/avatar.png'
const headerStyle = {
    backgroundColor: "#FFFFFF",
    borderColor: "white",
    left: "0.36%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    marginBottom: "86px",
    height: "70px",
}
const searchboxStyle = {
    border: "1px",
}
const headerInformTexts = {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#D8D8D8"
}
const headerInformTexts1 = {
    position: "absolute",
    height: "50px",
    left: "73.09%",
    right: "15.39%",
    top: "calc(50% - 18px/2 - 10px)"
}
const headerInformTexts2 = {
    position: "absolute",
    height: "18px",
    left: "73.09%",
    right: "16.63%",
    top: "calc(50% - 18px/2 - 9px)"
}
const iconStyles = {
    left: "50%", top: "50%", marginTop: "35%",
}
const avatarParentStyle = {
    position: "absolute",
    right: "25px",
    top: "11px"
}
const avatarStyle = {
    position: "absolute",
    right: "25px",
    top: "11px",
    width: "48px",
    height: "48px",
}
const notificationParentStyle = {
    position: "absolute",
    left: "1254px",
    top: "23px"
}
const notificationStyle = {
    position: "absolute",
    top: "23px",
    width: "29px",
    height: "22px",
    right:"80px"
}
const Header = () => {
    return (
        <CHeader position="sticky" style={headerStyle}>
            <CContainer fluid>
                <CHeaderNav className="d-none d-md-flex me-auto" style={{ marginBottom: "1%" }}>
                    <CNavItem>
                        <ReactSearchBox
                            placeholder="Search"
                            value=""
                            callback={record => console.log(record)}
                            style={{ borderRadius: "5px", justifySelf: "center" }}
                            inputBoxBorderColor="rgba(76,141,235,0.186481)"
                            inputBoxFontColor="#A0BCE4"
                        />
                    </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CNavItem className="row">
                        <CNavItem style={headerInformTexts1}>
                            <p style={headerInformTexts}>Reviewed Movies Count: </p>
                        </CNavItem>
                        <CNavItem style={headerInformTexts2}>
                            <p style={headerInformTexts}>Last Reviewed Movie: </p>
                        </CNavItem>
                    </CNavItem>
                    <CNavItem style={notificationParentStyle}>
                        <CNavLink href="#" >
                            <CAvatar src={notifications} size="xl" style={notificationStyle} />
                        </CNavLink>
                    </CNavItem>
                    <CNavItem style={avatarParentStyle}>
                        <CNavLink href="#">
                            <CAvatar src={avatar} size="xl" style={avatarStyle} />
                        </CNavLink>
                    </CNavItem>
                </CHeaderNav>
            </CContainer>
        </CHeader>
    )
}

export default Header