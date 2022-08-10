import React, { useState } from "react";
import { BrifPhone } from "./BrifMonoblokData";
import Loader from "../Loader";
import PhonesItem from "./MonoblogItem";
import { Link } from "react-router-dom";

export default function MonoblokList() {
  const [loading, setLoading] = useState(false);
  // console.log(BrifPhone);

  return (
    <>
      <div className='my-5 py-5'>
        <div className='container py-3'>
          <div className='row'>
            <div className='col-6'>
              <h1>Monobloklar</h1>
            </div>
            <div className='col-6'>
              <button className='btn btn-outline-success float-right'>
                <Link to='/allphones'>
                  Barchasini ko'rish
                  <i
                    style={{ color: "green", marginLeft: "5px" }}
                    className='fa-solid fa-caret-right'
                  ></i>
                </Link>
              </button>
            </div>
            <hr />
          </div>
        </div>
        <div className='container'>
          {loading ? (
            <Loader />
          ) : (
            <div className='row'>
              {BrifPhone?.map((value, index) => {
                return (
                  <div
                    key={BrifPhone.id}
                    className='col-lg-3 col-md-6 col-sm-12'
                  >
                    <PhonesItem BrifPhone={value} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
