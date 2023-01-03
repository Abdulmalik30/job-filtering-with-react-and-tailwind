import React from 'react';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
const FilterHeader = ({}) => {
  const { arr, handleArr, closeSection, handleCloseBtn } =
    useContext(DataContext);
  return (
    <article className='w-full flex flex-row justify-center items-center'>
      {arr.map((ar, index) => (
        <section
          className='flex bg-[#CCFFFF] items-center justify-betw mx-2 px-2'
          key={index}>
          <p>{ar}</p>
          <button
            onClick={() => handleArr(index)}
            className=' text-black  text-[32px] outline-none  -mt-1'>
            &times;
          </button>
        </section>
      ))}
      <section className={`${closeSection} justify-self-end flex items-center`}>
        <button
          onClick={handleCloseBtn}
          className='text-[24px]  opacity-60 -mt-1'>
          &times;
        </button>
        <small
          onClick={handleCloseBtn}
          className='text-[17px] opacity-60 cursor-pointer'>
          close
        </small>
      </section>
    </article>
  );
};

export default FilterHeader;
