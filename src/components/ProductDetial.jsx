import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BrifPhone } from "../components/phones/BrifPhones";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/action/index";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function ProductDetial() {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const proid = useParams();
  const proDetail = BrifPhone.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  // console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <Header />
      <div className='container my-5 py-3'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center mx-auto product'>
            <img src={product.img} alt={product.name} height='400px' />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <div className='list-group-item m-5'>
              <h3 className='fw-bold fw-bold'>{product.name}</h3>
              <hr />
              <div className='list-group-item'>
                <div className='fw-bold d-flex justify-content-between align-items-center'>
                  <span className='fw-bold'>Narxi: </span>
                  <span>{product.price} $</span>
                </div>
              </div>
              <div className='list-group-item'>
                <div className='fw-bold d-flex justify-content-between align-items-center'>
                  <span className='fw-bold'>Kategoriya: </span>
                  <span>{product.category}</span>
                </div>
              </div>
              <div className='list-group-item'>
                <div className='fw-bold d-flex justify-content-between align-items-center'>
                  <span className=''>Brand: </span>
                  <span>{product.brand}</span>
                </div>
              </div>
              <Link to='/'>
                <button className='btn btn-outline-danger mx-4'>
                  Xaridni davom ettirish
                </button>
              </Link>
              <button
                className='btn btn-outline-primary my-3'
                onClick={() => handleCart(product)}
              >
                {cartBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
