import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";
const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footer})` }}
      className='px-20 pt-20 bg-center bg-cover'
    >
      <div className='footer flex justify-between'>
        <div>
          <span className='footer-title'>Services</span>
          <Link className='link link-hover'>Branding</Link>
          <Link className='link link-hover'>Design</Link>
          <Link className='link link-hover'>Marketing</Link>
          <Link className='link link-hover'>Advertisement</Link>
        </div>
        <div>
          <span className='footer-title'>Oral Health</span>
          <Link className='link link-hover'>About us</Link>
          <Link className='link link-hover'>Contact</Link>
          <Link className='link link-hover'>Jobs</Link>
          <Link className='link link-hover'>Press kit</Link>
        </div>
        <div>
          <span className='footer-title'>Adress</span>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <p className='text-center mt-16 mb-5'>
        Copyright 2022 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
