import React from "react";
import Infocard from "./Infocard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  const cardInfo = [
    {
      title: "Opening Hours",
      desc: "Lorem Ipsum is simply dummy text of the pri",
      img: clock,
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      title: "Visit our location",
      desc: "Brooklyn, NY 10036, United States",
      img: marker,
      bgClass: "bg-accent",
    },
    {
      title: "Contact us now",
      desc: "+000 123 456789",
      img: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className='py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 px-12'>
      {cardInfo.map((info) => (
        <Infocard key={info.title} info={info} />
      ))}
    </div>
  );
};

export default Info;
