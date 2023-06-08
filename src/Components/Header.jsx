import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (

    <div className="header">

      <div className="header-top">
        <div className="container d-flex justify-content-between">
          <NavLink className='logo' to="/">
            <img src='../../src/assets/img/logo_cybersoft.png' alt="logo" />
          </NavLink>
          <div className="select-list d-flex justify-content-around">
            <div className='search'>
              <NavLink to='/search' ><i className="fa-solid fa-magnifying-glass"></i>
              Search
              </NavLink>
            </div>
            <div className="shop-carts">
              <NavLink to='/carts' ><i className="fa-solid fa-cart-shopping" />(0)</NavLink>
            </div>
            <div className="login">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="register">
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="btn_navbar">
            <i id="open" className="openBar fa fa-bars none" />
            <i id="closer" className="closeBar fa fa-times none" />
          </div>
          <nav id="navList" className="nav-list ">
            <ul className="menu-list d-flex ">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Men</NavLink>
              </li>
              <li>
                <NavLink to="/">Woman</NavLink>
              </li>
              <li>
                <NavLink to="/">Kid</NavLink>
              </li>
              <li>
                <NavLink to="/">Sport</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>


  )
}
