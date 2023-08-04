import PropTypes from 'prop-types';
function Tour({ tour }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const formatDuration = (duration) => {
    return `${duration} days`;
  };

  return (
    <li key={tour.id} className='rounded-lg shadow-lg'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <img
            className='w-full h-64 object-cover rounded-t-lg'
            src={tour.imageCover}
            alt={tour.name}
          />
          <div className='flex flex-col p-4 '>
            <div className='flex flex-row justify-between items-center mb-4'>
              <h3 className='text-lg font-semibold'>{tour.name}</h3>
              <p className='text-sm  flex flex-row items-center justify-center px-4 py-2 border border-transparent  rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 '>
                {formatPrice(tour.price)}
              </p>
            </div>
            <p className='text-sm text-gray-500'>{tour.summary}</p>
            <div className='flex flex-row justify-between mt-2'>
              <p className='text-sm text-gray-500'>
                {formatDuration(tour.duration)}
              </p>
              <p
                className={`text-sm px-2 py-1 ${
                  tour.difficulty === 'easy'
                    ? 'bg-green-100'
                    : tour.difficulty === 'medium'
                    ? 'bg-yellow-100'
                    : 'bg-red-100'
                }`}
              >
                {tour.difficulty}
              </p>
            </div>
            <div className='flex flex-row justify-between mt-2'>
              <p className='text-sm text-gray-500'>
                {tour.ratingsAverage > 4.5
                  ? '⭐️⭐️⭐️⭐️⭐️'
                  : tour.ratingsAverage > 3.5
                  ? '⭐️⭐️⭐️⭐️'
                  : tour.ratingsAverage > 2.5
                  ? '⭐️⭐️⭐️'
                  : tour.ratingsAverage > 1.5
                  ? '⭐️⭐️'
                  : tour.ratingsAverage > 0.5
                  ? '⭐️'
                  : 'No rating'}{' '}
                {tour.ratingsQuantity} ratings
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-between m-4'>
          <button className='flex flex-row items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700'>
            Book now
          </button>
          <button className='flex flex-row items-center justify-center px-4 py-2  border text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-50'>
            Details
          </button>
        </div>
      </div>
    </li>
  );
}

Tour.propTypes = {
  tour: PropTypes.object.isRequired,
};
export default Tour;
// "id": 8,
// "name": "The Northern Lights",
// "duration": 3,
// "maxGroupSize": 12,
// "difficulty": "easy",
// "ratingsAverage": 4.9,
// "ratingsQuantity": 33,
// "price": 1497,
// "summary": "Enjoy the Northern Lights in one of the best places in the world",
// "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!",
// "imageCover": "tour-9-cover.jpg",
// "images": ["tour-9-1.jpg", "tour-9-2.jpg", "tour-9-3.jpg"],
// "startDates": ["2021-12-16,10:00", "2022-01-16,10:00", "2022-12-12,10:00"]
// }
