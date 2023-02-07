import React from 'react';
import Products from './Products'

export default function Main() {
  return (
    <section className='w-5/6 m-auto'>
      <article className='w-full h-72 bg-banner bg-cover bg-bottom' >
        <p className='w-1/3 pt-6 text-4xl text-center'>
          <span className='block p-2'>Shop</span>
          <span className='block p-2 text-xl'>With</span>
          <span className='block p-2'>Us</span>
        </p>
        <p className='w-1/3 mt-7 text-center'>Best Products, High Quality</p>
      </article>
      <Products />
    </section>
  );
}

