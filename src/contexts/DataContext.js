import { createContext, useState, useEffect } from 'react';
import jobs from '../data.json';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [jobList, setJobList] = useState([]);
  const [arr, setArr] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (arr.length == 0) {
      setJobList(jobs);
      setIsDisplayed(false);
    }
    if (arr.length !== 0) setIsDisplayed(true);
  }, [arr]);

  const closeSection = isDisplayed ? 'block' : 'hidden';

  const handleCloseBtn = () => {
    setArr([]);
  };

  const handleArr = (index) => {
    const ar = arr.splice(index, 1);
    const newRemainingArr = arr.filter((a) => !a.includes(...ar));
    setArr(newRemainingArr);
  };
  const handleFilter = (filters) => {
    if (!arr.includes(filters) && filters !== '') {
      setArr([...arr, filters]);
    }

    const filtered = jobList.filter((job) => {
      return [...job.languages, ...job.tools, job.role, job.level].includes(
        filters
      );
    });

    setJobList(filtered);
  };
  return (
    <DataContext.Provider
      value={{
        arr,
        setArr,
        setJobList,
        jobs,
        jobList,
        handleArr,
        handleFilter,
        closeSection,
        handleCloseBtn,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
