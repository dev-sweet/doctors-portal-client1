import React from "react";

const Infocard = ({ info }) => {
  const { img, title, desc, bgClass } = info;
  return (
    <div className={`card lg:card-side px-5 text-white shadow-xl ${bgClass}`}>
      <figure>
        <img src={img} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Infocard;
