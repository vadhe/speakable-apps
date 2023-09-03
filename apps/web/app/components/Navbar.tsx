import { Bars3Icon } from '@heroicons/react/24/solid';
import React from 'react';

export const Navbar = () => {
  return (
    <header className="bg-white md:hidden flex items-center justify-between text-blueGray-600 p-4">
      <button
        className="w-7 h-7" // Adjust styling as needed
        role="button"
        tabIndex={1}
        // onClick={handleIconClick}
        // onKeyDown={handleIconKeyDown}
        aria-label="Menu" // Provide a meaningful label
      >
        <Bars3Icon className='flex-1' />
      </button>
      <h1 tabIndex={4} className="text-sm font-bold">SpeakAble Dashboard</h1>
      <p>logout</p>
    </header>
  );
};
