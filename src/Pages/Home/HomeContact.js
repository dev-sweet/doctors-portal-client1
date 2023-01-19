import React from "react";
import bg from "../../assets/images/appointment.png";
import Button from "../Shared/Button";
const HomeContact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className='py-12 bg-cover bg-no-repeat'
    >
      <div className='text-center mb-8'>
        <h3 className='text-primary text-2xl'>Contact Us</h3>
        <h1 className='text-4xl text-white'>Stay conneted with us</h1>
      </div>
      <div className='flex items-center justify-center'>
        <form action='' className='mx-30'>
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered w-full'
          />
          <input
            type='number'
            placeholder='Phone'
            className='input input-bordered w-full my-4'
          />
          <br />
          <textarea
            className='textarea textarea-bordered w-full h-12'
            placeholder='Your Message'
            cols='8'
          ></textarea>
          <div className='text-center'>
            <Button className='self-center'>Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
