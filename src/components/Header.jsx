import React from "react";
import { Link } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Register from "./buttons/Register";
import Topnavbar from "./Topnavbar";

export default function Header() {
  return (
    <>
      <Topnavbar />
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container py-2'>
          <div className='navbar-brand'>
            <img
              width='80px'
              src='./img/logo/LogoMakr-6Tit9e.png'
              className=''
              alt=''
            />
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' aria-current='page' to='/'>
                  Bosh sahifa
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Mahsulotlar
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Aloqa
                </Link>
              </li>
            </ul>
            <form className='d-flex mx-auto' role='search'>
              <input
                style={{ borderRadius: "0", outline: "none" }}
                className='form-control'
                type='search'
                placeholder='Qidirish...'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </button>
            </form>
            <div className='buttons d-flex justify-content-center py-3'>
              <Login />
              <Register />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
