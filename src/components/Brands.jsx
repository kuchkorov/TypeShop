import React from "react";

export default function Brands() {
  return (
    <>
      <section className='bg-light py-5 mt-5'>
        <div className=' my-4 container'>
          <div className=' text-center py-3 row'>
            <div className='m-auto col-lg-6'>
              <h1 className='h1'>Brendlar</h1>
              <p>Do'konni eng yaxshi brendlar</p>
            </div>
            <div className='m-auto tempaltemo-carousel col-lg-9'>
              <div className='d-flex flex-row row'>
                <div className='col-1 align-self-center col'>
                  <a
                    className='h1'
                    href='#templatemo-slide-brand'
                    role='button'
                    data-bs-slide='prev'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 448 512'
                      height='1.2rem'
                      width='1.2rem'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'></path>
                    </svg>
                  </a>
                </div>
                <div className='col'>
                  <div
                    className='carousel slide carousel-multi-item pt-2 pt-md-0'
                    id='templatemo-slide-brand'
                    data-bs-ride='carousel'
                  >
                    <div
                      className='carousel-inner product-links-wap'
                      role='listbox'
                    >
                      <div className='carousel-item'>
                        <div className='row'>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/MSI-Logo.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/sumsung_logo.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/i_phone.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/hp_i.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='carousel-item active'>
                        <div className='row'>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/asus_rog.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/amd_r.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/dell.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                          <div className='col-3 p-md-5'>
                            <a href='#'>
                              <img
                                className='img-fluid brand-img'
                                src='./img/brands/Razer-Logo-Horizontal-1-1.png'
                                alt='Brand Logo'
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-1 align-self-center'>
                  <a
                    className='h1'
                    href='#templatemo-slide-brand'
                    role='button'
                    data-bs-slide='next'
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      viewBox='0 0 448 512'
                      height='1.2rem'
                      width='1.2rem'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
