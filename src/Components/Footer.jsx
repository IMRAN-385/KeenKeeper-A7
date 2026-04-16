import React from 'react'
import logoImg from '../assets/B13-A7-keen-keeper/asset/logo-xl.png'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='bg-green-900 text-white'>

      <div className='container mx-auto py-10 px-4'>

       
        <img className='mx-auto w-40' src={logoImg} alt="logo" />

        <p className='text-center max-w-xl mx-auto py-4 text-sm'>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

      
        <h3 className='text-center pt-5 pb-2 font-semibold'>
          Social Links
        </h3>

        <div className='flex justify-center gap-4 text-xl'>
          <FaFacebook />
          <BsTwitterX />
          <FaInstagramSquare />
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-8 text-sm border-t border-white/20 pt-4'>

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className='flex gap-4'>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Cookies</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;