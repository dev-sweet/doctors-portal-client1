import React from "react";
import qoute from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      location: "California",
      img: people3,
    },
  ];
  return (
    <section className='px-12 py-12'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-primary text-2xl font-bold'>Testimonials</h3>
          <h2 className='text-accent text-4xl'>What Our Patients Says</h2>
        </div>
        <img className='w-44' src={qoute} alt='' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-8'>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
