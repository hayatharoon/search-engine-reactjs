import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Search } from './Search';
import { Results } from './Results';

export const Routers = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Navigate replace to='/search' />} />
      </Routes>
      <Routes>
        {['/images', '/videos', '/news', '/search'].map((path) => (
          <Route key={path} path={path} element={<Results />} />
        ))}
      </Routes>
    </div>
  );
};
