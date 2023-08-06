import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import ScrollToTop from 'react-scroll-to-top'
export default function HomeTemplate() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTop className='back-to-top' smooth color='#fff' width='1.3rem' height='1.2rem'/>
        </div>
    )
}
