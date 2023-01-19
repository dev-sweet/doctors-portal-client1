import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className='bg-no-repeat bg-cover'
    >
      <div className='hero min-h-screen'>
        <div className='hero-content flex-col lg:flex-row-reverse justify-between'>
          <img
            src={chair}
            alt=''
            className='ml-20 max-w-sm rounded-lg shadow-2xl'
          />
          <div className='pr-20'>
            <DayPicker mode='single' selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
