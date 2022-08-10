import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";

export default function Checout() {
  const state = useSelector((state) => state.addItem);

  let total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className='list-group-item d-flex justify-content-between lh-sm'>
        <div>
          <h6 className='my-0'>{item.name}</h6>
        </div>
        <span className='text-muted'>{item.price} $</span>
      </li>
    );
  };

  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row g-5'>
          <div className='col-md-5 col-lg-4 order-md-last'>
            <h4 className='d-flex justify-content-between align-items-center mb-3'>
              <span className='text-primary'>Sizning xaridingiz</span>
              <span className='badge bg-primary rounded-pill'>
                {state.length}
              </span>
            </h4>
            <ul className='list-group mb-3'>
              {state.map(itemList)}
              <li className='list-group-item d-flex justify-content-between'>
                <span>Total (UZS)</span>
                <strong>{total} $</strong>
              </li>
            </ul>
          </div>
          <div className='col-md-7 col-lg-8'>
            <form className='needs-validation' noValidate=''>
              <h4 className='mb-3'>Murojaat manzili</h4>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>
                    Ismingiz
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firstName'
                    placeholder=''
                    value=''
                    required
                  />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>
                    Familiyangiz
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastName'
                    placeholder=''
                    value=''
                    required
                  />
                </div>

                <div className='col-6'>
                  <label htmlFor='email' className='form-label'>
                    Email manzil<span className='text-muted'></span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='you@example.com'
                    required
                  />
                </div>

                <div className='col-6'>
                  <label htmlFor='phone' className='form-label'>
                    Telefon raqamingiz<span className='text-muted'></span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phome'
                    placeholder='+998(99)123-45-67'
                    required
                  />
                </div>

                <div className='col-12'>
                  <label htmlFor='address' className='form-label'>
                    To'liq manzil:
                    <span className='text-muted'>
                      (Bu buyurtmani yetkazib berishda juda muhim)
                    </span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    placeholder="Viloyat, tuman, shahar, shaharcha, mahalla, ko'cha, uy"
                    required
                  />
                </div>

                <label htmlFor='textarea' className='text-muted'>
                  Qo'shimcha ma'lumotlar
                </label>
                <textarea
                  className='text-muted mb-5'
                  name=''
                  id='textarea'
                  cols='112'
                  rows='10'
                ></textarea>
              </div>

              <button className='w-100 btn btn-primary btn-lg' type='submit'>
                Buyurtma berish
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
