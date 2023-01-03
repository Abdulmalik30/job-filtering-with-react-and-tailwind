import Cards from './components/Cards';
import FilterHeader from './components/FilterHeader';
import Header from './components/Header';
import { DataProvider } from './contexts/DataContext';

function App() {
  // const { arr, handleArr, jobList, setJobList, setArr, handleFilter, jobs } =
  //   useContext(DataContext);
  return (
    <>
      <Header />
      <DataProvider>
        <FilterHeader />
        <main className='w-screen grid justify-center bg-[#CCFFFF]'>
          <Cards />
        </main>
      </DataProvider>
    </>
  );
}

export default App;
