import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delItem } from "../../redux/action/index";
import Header from "../../components/Header";

export default function Cart() {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className='cart px-4 my-5 bg-light rounded-3' key={cartItem.id}>
        <div className='container py-4'>
          <button
            onClick={() => handleClose(cartItem)}
            className='btn-close float-end'
            aria-label='Close'
          ></button>
          <div className='row justify-content-center'>
            <div className='col-md-3'>
              <img
                className='img-fluid'
                src={cartItem.img}
                alt={cartItem.name}
              />
            </div>
            <div className='col-md-6'>
              <h35>{cartItem.name}</h35>
              <p className='lead '>{cartItem.price} $</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounded-3'>
        <div className='container py-4'>
          <div className='row'>
            <h3>Savatcha bo'sh</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className='container my-5'>
        <div className='row'>
          <Link to='/products' className='btn btn-outline-danger mx-auto w-25'>
            Sotuvni davom ettirish
          </Link>
          <Link to='/checkout' className='btn btn-outline-primary mx-auto w-25'>
            Rasmiylashtirish
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
}
