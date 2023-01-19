import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const HomeAppointment = () => {
  return (
    <section
      style={{ backgroundImage: `url(${appointment})` }}
      className='flex justify-center items-center bg-center bg-no-repeat px-12'
    >
      <div className='flex-1'>
        <img className='mt-[-160px]' alt='' src={doctor}></img>
      </div>
      <div className='flex-1'>
        <h3 className='font-bold uppercase text-primary text-xl'>
          Appointment
        </h3>
        <h2 className='text-5xl text-white py-5'>Make an Appointment Today</h2>
        <p className='text-slate-300	'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
      </div>
    </section>
  );
};

export default HomeAppointment;
