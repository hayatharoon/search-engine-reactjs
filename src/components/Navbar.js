import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = (props) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-300'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <p className='text-2xl bg-blue-600 font-bold text-white px-2 py-1 rounded dark:bg-gray-500 dark: text-gray-900'>Search Engine 🔎</p>
        </Link>
        <button
          type='button'
          className='text-xl bg-white border rounded-full px-2 py-1 dark:bg-gray-50 dark:text-gray-900 hover:shadow-lg'
          onClick={() => {
            props.setDarkTheme(!props.darkTheme);
          }}>
          {props.darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
      </div>
      <Search />
    </div>
  );
};
