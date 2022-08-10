import React, { useState } from "react";
import { BrifPhone } from "./BrifNotebooksData";
import Loader from "../Loader";
import NotebooksItem from "./NotebooksItem";
import { Link } from "react-router-dom";

export default function NotebooksList() {
  const [loading, setLoading] = useState(false);
  // console.log(BrifPhone);

  return (
    <>
      <div className='bg-light my-5 py-5'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-6'>
              <h1>Noutbuklar</h1>
            </div>
            <div className='col-6'>
              <button className='btn btn-outline-success float-right'>
                <Link to='/allphones'>
                  Barchasi ko'rish
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
                    <NotebooksItem BrifPhone={value} />
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
