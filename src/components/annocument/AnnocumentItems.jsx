import React from "react";
import "./Annocument.css";

export default function AnnocumentItems({ AnnocumentData }) {
  //   console.log(AnnocumentData);
  return (
    <>
      <div className='product'>
        <div className='img icon-circle'>
          <span>{AnnocumentData.icon}</span>
        </div>
        <h3>{AnnocumentData.title}</h3>
      </div>
    </>
  );
}
