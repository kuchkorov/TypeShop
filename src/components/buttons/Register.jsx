import React from "react";

function Register() {
  return (
    <>
      <button
        type='button'
        className='btn btn-outline-primary ms-2'
        data-bs-toggle='modal'
        data-bs-target='#registerModal'
      >
        <i className='fa-solid fa-user-plus me-1'></i>
        Register
      </button>

      <div
        className='modal fade'
        id='registerModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Register
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <button className='btn btn-success w-100 mb-4'>
                <span className='fa-brands fa-google me-2'></span> Sign up With
                Google
              </button>
              <button className='btn btn-success w-100 mb-4'>
                <span className='fa-brands fa-facebook me-2'></span> Sign up
                with Facebook
              </button>
              <form>
                <div className='mb-3'>
                  <label htmlFor='exampleInput' className='form-label'>
                    User Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInput'
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                  <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                  </div>
                </div>

                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                  />
                </div>
                <div className='mb-3 form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='exampleCheck1'
                  />
                  <label className='form-check-label' htmlFor='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' className='btn btn-outline-primary w-100'>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
