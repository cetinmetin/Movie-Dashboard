import React, { Suspense } from 'react'
// import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { Sidebar, Content, Header } from '../components/index'
import { CContainer, CSpinner } from '@coreui/react'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
          <Suspense fallback={<div className="align-self-center"><CSpinner color="primary" /></div>}>
        <div className="body flex-grow-1" >
            <Content />
        </div>
          </Suspense>
      </div>
    </div>
  )
}

export default DefaultLayout
