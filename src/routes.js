import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Social = React.lazy(() => import('./views/social/Social'))
const Report = React.lazy(() => import('./views/report/Report'))
const TagPage = React.lazy(() => import('./views/tag/TagPage'))
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/social', name: 'Social', component: Social },
    { path: '/report', name: 'Report', component: Report },
    { path: '/tagPage', name: 'TagPage', component: TagPage }
]

export default routes