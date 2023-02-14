import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
  const { name, slots } = treatment;
  console.log(treatment);
  const { user } = useContext(AuthContext);
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

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking Confirmed!");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
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
              value={date}
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
              defaultValue={user?.displayName}
              className='input input-bordered w-full'
            />
            <input
              name='email'
              type='email'
              placeholder='Your Email'
              defaultValue={user?.email}
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
