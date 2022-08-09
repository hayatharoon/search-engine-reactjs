import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchItem } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if (searchItem) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchItem} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchItem}&num=40`);
      }
    }
  }, [searchItem, location.pathname]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      return (
        <div className='sm:px-32 flex flex-wrap justify-between space-y-6'>
          {results?.results?.map(({ link, title, description }, index) => (
            <div key={index} className='md:w-4/5 w-full'>
              <a href={link} target='_blank' rel='noreferrer'>
                <p className='text-sm'>{link.length > 30 ? link.substring(0, 30) : link}</p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700  '>{title}</p>
                <p className='text-sm dark:text-gray-300 text-gray-600  '>{description}</p>
              </a>
            </div>
          ))}
        </div>
      );
    case '/images':
      return (
        <div className='flex flex-wrap justify-center items-center'>
          {results?.image_results?.map(({ image, link: { href, title } }, index) => (
            <a href={href} target='_blank' key={index} rel='noreferrer' className='sm:p-3 p-5'>
              <img src={image?.src} alt={title} loading='lazy' />
              <p className='sm:w-36 w-36 break-words text-sm mt-2'>{title}</p>
            </a>
          ))}
        </div>
      );
    case '/videos':
      return 'You are at Videos page';
    default:
      return 'Error no page found';
  }
};
