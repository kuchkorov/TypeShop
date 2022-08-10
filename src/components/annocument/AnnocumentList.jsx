import React from "react";
import "./Annocument.css";
import { AnnocumentData } from "./AnnocumentData";
import AnnocumentItems from "./AnnocumentItems";

export default function Annocument() {
  // console.log(AnnocumentData);
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          <div className='row'>
            {AnnocumentData?.map((value, index) => {
              return (
                <div key={value.id} className='col-lg-3'>
                  <AnnocumentItems AnnocumentData={value} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
