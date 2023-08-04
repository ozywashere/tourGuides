import { useState, useEffect } from 'react';
import api from './api/axios';
import Tours from './components/Tours';
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/tours');
      const tours = response.data;
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 '>
        <div className='max-w-screen-md mb-8 lg:mb-16  mx-auto text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
            {isLoading
              ? 'Loading...'
              : isError
              ? 'Error'
              : `
            ${tours.length} tours available
            `}
          </h2>
          <p className='text-gray-500 sm:text-xl  '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            officiis dicta, sequi labore hic eaque ad facilis dignissimos?
            Aperiam dolor eos aspernatur natus molestias voluptate fugit nemo
            velit esse ut.
          </p>
          <div className=''>
            <button className='mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'>
              Get started
            </button>
            <button className='mt-8 ml-4 inline-flex items-center px-6 py-3 border border-1 text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50'>
              Learn more
            </button>
          </div>
        </div>
        <Tours tours={tours} />
      </div>
    </div>
  );
}

export default App;
