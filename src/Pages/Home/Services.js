import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";
import Button from "../Shared/Button";
const Services = () => {
  const services = [
    {
      _id: 1,
      img: flouride,
      title: "Flouride Treatment",
    },
    {
      _id: 2,
      img: cavity,
      title: "Cavity Filling",
    },
    {
      _id: 3,
      img: whitening,
      title: "Teeth Whitening",
    },
  ];
  return (
    <div className='px-12'>
      <div className='text-center py-5'>
        <h3 className='text-primary text-2xl font-bold uppercase mt-12'>
          Our Services
        </h3>
        <h2 className='text-5xl'>Services We Provide</h2>
      </div>
      <div className='my-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className='hero min-h-screen px-32'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src={treatment}
            className='max-w-sm rounded-lg shadow-2xl'
            alt=''
          />
          <div className='text-accent px-16'>
            <h1 className='text-5xl font-bold'>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className='py-6'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
