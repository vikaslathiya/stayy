import React, { Fragment } from 'react'
import TopHeader from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <Fragment>
            <TopHeader />
            <div className='grid grid-cols-1 p-10'>
                {children}
                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout