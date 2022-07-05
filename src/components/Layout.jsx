import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

function Layout({currentUser}) {

  return (
    <div>
        <Header currentUser={currentUser} />
        <Outlet />
        <Footer/>
    </div>
  )
}

export default Layout