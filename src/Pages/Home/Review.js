import React from "react";

const Review = ({ review }) => {
  const { name, img, location } = review;
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className='flex items-center py-4'>
          <div className='avatar'>
            <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img alt='' src={img} />
            </div>
          </div>
          <div className='pl-4'>
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
