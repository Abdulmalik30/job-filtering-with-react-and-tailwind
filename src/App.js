import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Header from './components/Header';
import jobs from './data.json';

function App() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    setJobList(jobs);
  }, [jobList]);
  return (
    <>
      <Header />
      <main className='w-screen grid justify-center'>
        {jobList.map((job) => (
          <Cards job={job} key={job.id} />
        ))}
      </main>
    </>
  );
}

export default App;
