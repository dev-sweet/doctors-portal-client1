import React, { useState } from "react";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";
const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointments");
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <section className='p-12'>
        <h2 className='text-xl text-center text-primary'>
          Available Appointments on {format(date, "PP")}
        </h2>
        <p className='text-center text-accent mt-3'>Please select a service.</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
          {services &&
            services.map((service) => (
              <Service
                key={service._id}
                setTreatment={setTreatment}
                service={service}
              />
            ))}
        </div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            setTreatment={setTreatment}
            date={date}
          />
        )}
      </section>
    </>
  );
};

export default AvailableAppointments;
