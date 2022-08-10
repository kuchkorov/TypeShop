import React, { useState } from "react";
import { BrifPhone } from "../components/phones/BrifPhones";
import Loader from "./Loader";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const [loading, setLoading] = useState(false);
  // console.log(BrifPhone);

  return (
    <>
      <div>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12'>
              <h1>Telefonlar</h1>
              <hr />
            </div>
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
                    <ProductItem BrifPhone={value} />
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
