import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, date }) => {
  const { name, slots } = treatment;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      patientName: name,
      appointmentDate: date,
      treatment: treatment.name,
      slot,
      email,
      phone,
    };
    console.log(booking);

    setTreatmentNull();
  };
  const setTreatmentNull = () => {
    setTreatment(null);
  };
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>{name}</h3>
          <form onSubmit={handleSubmit} className='grid cols-1 gap-2 pt-5'>
            <input
              name='date'
              type='text'
              value={format(date, "PP")}
              className='input input-bordered w-full'
              disabled
            />
            <select name='slot' className='select select-bordered w-full'>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name='name'
              type='text'
              placeholder='Your Name'
              className='input input-bordered w-full'
            />
            <input
              name='email'
              type='email'
              placeholder='Your Email'
              className='input input-bordered w-full'
            />
            <input
              name='phone'
              type='text'
              placeholder='Your phone'
              className='input input-bordered w-full'
            />
            <br />
            <button
              // onClick={() => setTreatment(null)}
              type='submit'
              className='btn btn-accent w-full'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
