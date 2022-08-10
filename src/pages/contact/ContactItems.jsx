import React from "react";

export default function ContactItems(props) {
  const {
    name,
    desc,
    title1,
    title2,
    title3,
    icon1,
    icon2,
    icon3,
    address,
    email,
    phone,
  } = props;
  return (
    <>
      <div data-aos='fade-up' className='container'>
        <div className='section-title'>
          <h2 className='text-center'>{name}</h2>
          <p>{desc}</p>
        </div>
        <div data-aos='fade-up' data-aos-delay='100' className='row'>
          <div className='col-lg-6'>
            <div className='row mb-4'>
              <div className='col-md-12'>
                <div className='info-box bg-white'>
                  {icon1}
                  <h3>{title1}</h3>
                  <p>{address}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='info-box mt-4 bg-white'>
                  {icon2}
                  <h3>{title2}</h3>
                  <p>
                    {email}
                    <br />
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='info-box mt-4 bg-white'>
                  {icon3}
                  <h3>{title3}</h3>
                  <p>
                    {phone}
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <form
              action='forms/contact.php'
              method='post'
              role='form'
              className='php-email-form bg-white'
            >
              <div className='row'>
                <div className=' form-group col'>
                  <input
                    name='name'
                    placeholder='Ismingiz'
                    required=''
                    type='text'
                    id='name'
                    className='bg-surface-secondary form-control'
                  />
                </div>
                <div className='col form-group'>
                  <input
                    name='email'
                    placeholder='Elektron pochta manzili'
                    required=''
                    type='email'
                    id='email'
                    className='bg-surface-secondary form-control'
                  />
                </div>
              </div>
              <div className='form-group'>
                <input
                  name='subject'
                  placeholder='Subject'
                  required=''
                  type='text'
                  id='subject'
                  className='bg-surface-secondary form-control'
                />
              </div>
              <div className='form-group'>
                <textarea
                  name='message'
                  rows='5'
                  placeholder='Xabar'
                  required=''
                  className='bg-surface-secondary form-control'
                ></textarea>
              </div>
              <div className='my-3'>
                <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className='text-center'>
                <button type='submit' className='btn btn-danger'>
                  Xabar yuborish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
