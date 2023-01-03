import { useContext } from 'react';
import DataContext from '../contexts/DataContext';
const Cards = ({}) => {
  const { jobList, handleFilter } = useContext(DataContext);
  // const skills = [...job.languages, ...job.tools];
  return (
    <>
      {jobList.map((job) => (
        <article
          key={job.id}
          className={` shadow-lg bg-white mb-4 max-w-4xl  grid grid-cols-1 p-4 h-52 lg:my-2 my-6 lg:h-auto lg:grid lg:grid-cols-2 lg:static relative`}>
          <section className=' lg:flex-row flex lg:static relative flex-col -top-11'>
            <img
              src={job.logo}
              alt={job.company}
              className='w-11 h-11 lg:h-auto lg:w-auto lg:static mb-3'
            />
            <section className='mx-3'>
              <div className='flex'>
                <small className='text-teal-700'>{job.company}</small>
                {job.new ? (
                  <p className='bg-teal-700 text-white rounded-full mx-2 px-3 text-1xl'>
                    NEW!
                  </p>
                ) : null}
                {job.featured ? (
                  <p className='bg-black text-white rounded-full px-3'>
                    FEATURED
                  </p>
                ) : null}
              </div>
              <p className='hover:text-teal-700 cursor-pointer font-bold'>
                {job.position}
              </p>
              <div className='flex'>
                <small className='mx-2 opacity-80'>{job.postedAt}</small>
                <small className='mx-2 opacity-80'>{job.contract}</small>
                <small className='mx-2 opacity-80'>{job.location}</small>
              </div>
            </section>
            <hr className='lg:hidden mx-auto bg-black opacity-100 w-5/6 mt-3' />
          </section>

          <section className='grid place-content-center -mt-4'>
            <div className='grid lg:grid-cols-5 grid-cols-3 gap-y-3'>
              <button
                type='button'
                onClick={() => handleFilter(job.level)}
                className='mx-2 px-1  bg-[#CCFFFF] text-teal-700 hover:bg-teal-700 hover:text-white'>
                {job.level}
              </button>
              <button
                type='button'
                onClick={() => handleFilter(job.role)}
                className='mx-2 px-1 bg-[#CCFFFF] text-teal-700 hover:bg-teal-700 hover:text-white'>
                {job.role}
              </button>
              {[...job.languages, ...job.tools].map((skill, index) => (
                <button
                  key={index}
                  type='button'
                  className='mx-2 px-1 bg-[#CCFFFF] text-teal-700 hover:bg-teal-700 hover:text-white'
                  onClick={() => handleFilter(skill)}>
                  {skill}
                </button>
              ))}
            </div>
          </section>
        </article>
      ))}
    </>
  );
};

export default Cards;
