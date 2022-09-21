import React from "react";

export default function Footer() {
  return (
    <>
      <div id='footer'>
        <footer id='footer' className='mx-auto'>
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='footer-contact col-lg-3 col-md-6 col-12'>
                  <h3>
                    <img src='' width='100' alt='' />
                  </h3>
                  <p>
                    <strong>Phone: </strong>
                    +998 93 774 67 00 <br />
                    <strong>Email: </strong>
                    eshop@mail.ru <br />
                  </p>
                </div>
                <div className='footer-links col-lg-2 col-md-6 col-6'>
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className='bx bx-chevron-right'></i>
                      <a href='#'>Home</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>
                      <a href='#'>About Us</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>
                      <a href='#'>Services</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>
                      <a href='#'>Terms of services</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>
                      <a href='#'>Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className='footer-links col-lg-3 col-md-6 col-6'>
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className='bx bx-chevron-right'></i>{" "}
                      <a href='#'>Web Design</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>{" "}
                      <a href='#'>Web Development</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>{" "}
                      <a href='#'>Product Management</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>{" "}
                      <a href='#'>Marketing</a>
                    </li>
                    <li>
                      <i className='bx bx-chevron-right'></i>{" "}
                      <a href='#'>Graphic Design</a>
                    </li>
                  </ul>
                </div>
                <div className='footer-newsletter col-lg-4 col-md-6'>
                  <h4>Join Our Newsletter</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form>
                    <input
                      type='email'
                      required
                      placeholder='email@domain.com'
                      name='email'
                    />
                    <input type='submit' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className='container d-md-flex py-4'>
          <div className='me-md-auto text-center text-md-start'>
            <div className='copyright'>
              © Copyright{" "}
              <strong>
                <span>Type Shop</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className='credits'>
              Designed by <a href='#'>Masterdev.uz</a>
            </div>
          </div>
          <div className='social-links text-center text-md-end pt-3 pt-md-0'>
            <a href='#' className='twitter'>
              <i className=' fa fa-twitter'></i>
            </a>
            <a href='#' className='facebook'>
              <i className=' fa fa-facebook'></i>
            </a>
            <a href='#' className='instagram'>
              <i className=' fa fa-instagram'></i>
            </a>
            <a href='#' className='google-plus'>
              <i className=' fa fa-skype'></i>
            </a>
            <a href='#' className='linkedin'>
              <i className=' fa fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
