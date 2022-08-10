import React from "react";
import { Link } from "react-router-dom";

export default function NotebookItem({ BrifPhone }) {
  // console.log(BrifPhone);
  return (
    <div className='card m-3 shadow'>
      <img
        src={BrifPhone.img}
        className='card-img-top img-fluid'
        alt={BrifPhone.name}
      />
      <div className='card-body text-center'>
        <h5 className='card-title'>{BrifPhone.name}</h5>
        <p className='lead'>{BrifPhone.price} $</p>
        <Link
          to={`/products/${BrifPhone.id}`}
          className='btn btn-outline-danger'
        >
          Sotib olish
        </Link>
      </div>
    </div>
  );
}
