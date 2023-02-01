import React from "react";
const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className='card bg-white text-primary shadow'>
      <div className='card-body'>
        <h2 className='card-title justify-center'>{name}</h2>
        <div className='text-center'>
          <span className='text-xsm text-accent text-center'>{`${slots.length} spaces available`}</span>
          <p className='text-sm text-center text-accent'>{slots[0]}</p>

          <br />
          <label
            onClick={() => setTreatment(service)}
            htmlFor='booking-modal'
            className='btn btn-primary uppercase mt-2 text-white'
          >
            Booking Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
