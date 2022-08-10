import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartBtn() {
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <div>
        <Link to='/cart' className='btn btn-outline-danger ms-2'>
          <i className='fa-solid fa-cart-arrow-down'></i> Cart ({state.length})
        </Link>
      </div>
    </>
  );
}
