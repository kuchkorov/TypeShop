import React from "react";

export default function Topnavbar() {
  return (
    <>
      <nav
        className='navbar navbar-expand-lg bg-dark navbar-light h-12 d-none d-lg-block'
        id='templatemo_nav_top'
      >
        <div className='container text-light top-navbar'>
          <div className='top-navbar-left'>
            <div>
              <i className='fa text-sm  fa-phone mx-2'></i>
              <a
                className='navbar-sm-brand text-sm  text-light text-decoration-none'
                href='tel:010-020-0340'
              >
                +998 93 774 67 00
              </a>
            </div>
          </div>
          <div className='top-navbar-right'>
            <div className='social-icons'>
              <a
                className='text-light'
                href='https://fb.com'
                target='_blank'
                rel='sponsored'
              >
                <i className='fab text-sm  fa-facebook-f fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.instagram.com/'
                target='_blank'
              >
                <i className='fab text-sm  fa-instagram fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://twitter.com/'
                target='_blank'
              >
                <i className='fab text-sm fa-twitter fa-sm fa-fw me-2'></i>
              </a>
              <a
                className='text-light'
                href='https://www.linkedin.com/'
                target='_blank'
              >
                <i className='fab text-sm fa-linkedin fa-sm fa-fw'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
