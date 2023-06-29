import React, { Fragment } from 'react'
import TopHeader from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <TopHeader />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout