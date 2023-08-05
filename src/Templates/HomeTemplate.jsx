import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import  Container  from '@mui/material/Container'
export default function HomeTemplate() {
    return (
        <div>
      
            <Header />
            <div className='container' style={{ minHeight: '80vh',marginTop:'100px' }}>
                <Outlet />
            </div>
            <Footer />
     
        </div>
    )
}
