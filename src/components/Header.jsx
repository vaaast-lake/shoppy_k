import React from 'react';
import { FiShoppingBag, FiShoppingCart } from 'react-icons/fi'

export default function Header() {
  return (
    <header className='flex justify-between items-center w-5/6 m-auto p-4 text-xl'>
      <div id='logo' className='flex items-center text-3xl'>
        <FiShoppingBag />
        <span className='ml-2 text-3xl'>Shoppers</span>
      </div>
      <div id='navigate_containser' className='flex items-center'>
        <span className='p-2'>Producs</span>
        <FiShoppingCart />
        <button className='ml-4'>Login</button>
      </div>
    </header>
  );
}

