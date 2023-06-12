import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { USER_LOGIN, clearStorage } from '../util/config';

export default function Header() {
  const { userLogin } = useSelector(state => state.userReducer);
  const renderLoginLink = () => {
    if (userLogin.email !== '') {
      return <>
        <div className="login-in">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className='logout'>
          <NavLink className="nav-link" onClick={() => {
            // khi ấn vào nút Logout thì sẽ xoá data ở local đi style={{ cursor: 'pointer' }}
            clearStorage(USER_LOGIN);
            window.location.reload(); //f5 reload lại 
          }}>Logout <i className="fa-solid fa-right-from-bracket"></i></NavLink>
        </div>
      </>
    }
    return <div className='login-in'>
      <NavLink to="/login">Login</NavLink>
    </div>

  }

  return (
    <div className="header">

      <div className="header-top">
        <div className="container d-flex justify-content-between">
          <NavLink className='logo' to="/">
            <img src='../assets/img/logocyber.png' alt="logo" />
          </NavLink>
          <div className="select-list d-flex justify-content-around">
            <div className='header-search'>
              <NavLink to='/search' ><i className="fa-solid fa-magnifying-glass"></i>
                Search
              </NavLink>
            </div>
            <div className="shop-carts">
              <NavLink to='/carts' ><i className="fa-solid fa-cart-shopping" />(0)</NavLink>
            </div>

            {renderLoginLink()}
            {/* <NavLink to="/login">Login</NavLink> */}

            <div className="header-register">
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
