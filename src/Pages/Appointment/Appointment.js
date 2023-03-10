import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </>
  );
};

export default Appointment;
