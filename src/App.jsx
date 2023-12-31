const toursData = [
  {
    id: 0,
    name: 'The Forest Hiker',
    duration: 5,
    maxGroupSize: 25,
    difficulty: 'easy',
    ratingsAverage: 4.7,
    ratingsQuantity: 37,
    price: 397,
    summary: 'Breathtaking hike through the Canadian Banff National Park',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageCover:
      'https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-1-1.jpg', 'tour-1-2.jpg', 'tour-1-3.jpg'],
    startDates: ['2021-04-25,10:00', '2021-07-20,10:00', '2021-10-05,10:00'],
  },
  {
    id: 1,
    name: 'The Sea Explorer',
    duration: 7,
    maxGroupSize: 15,
    difficulty: 'medium',
    ratingsAverage: 4.8,
    ratingsQuantity: 23,
    price: 497,
    summary: 'Exploring the jaw-dropping US east coast by foot and by boat',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover:
      'https://images.pexels.com/photos/6149484/pexels-photo-6149484.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: ['tour-2-1.jpg', 'tour-2-2.jpg', 'tour-2-3.jpg'],
    startDates: ['2021-06-19,10:00', '2021-07-20,10:00', '2021-08-18,10:00'],
  },
  {
    id: 2,
    name: 'The Snow Adventurer',
    duration: 4,
    maxGroupSize: 10,
    difficulty: 'difficult',
    ratingsAverage: 4.5,
    ratingsQuantity: 13,
    price: 997,
    summary: 'Exciting adventure in the snow with snowboarding and skiing',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    imageCover:
      'https://images.pexels.com/photos/13231902/pexels-photo-13231902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-3-1.jpg', 'tour-3-2.jpg', 'tour-3-3.jpg'],
    startDates: ['2022-01-05,10:00', '2022-02-12,10:00', '2023-01-06,10:00'],
  },
  {
    id: 3,
    name: 'The City Wanderer',
    duration: 9,
    maxGroupSize: 20,
    difficulty: 'easy',
    ratingsAverage: 4.6,
    ratingsQuantity: 54,
    price: 1197,
    summary: "Living the life of Wanderlust in the US' most beatiful cities",
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet.\nConsectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!',
    imageCover:
      'https://images.pexels.com/photos/3229916/pexels-photo-3229916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-4-1.jpg', 'tour-4-2.jpg', 'tour-4-3.jpg'],
    startDates: ['2021-03-11,10:00', '2021-05-02,10:00', '2021-06-09,10:00'],
  },
  {
    id: 4,
    name: 'The Park Camper',
    duration: 10,
    maxGroupSize: 15,
    difficulty: 'medium',
    ratingsAverage: 4.9,
    ratingsQuantity: 19,
    price: 1497,
    summary: "Breathing in Nature in America's most spectacular National Parks",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!',
    imageCover:
      'https://images.pexels.com/photos/6271301/pexels-photo-6271301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-5-1.jpg', 'tour-5-2.jpg', 'tour-5-3.jpg'],
    startDates: ['2021-08-05,10:00', '2022-03-20,10:00', '2022-08-12,10:00'],
  },
  {
    id: 5,
    name: 'The Sports Lover',
    duration: 14,
    maxGroupSize: 8,
    difficulty: 'difficult',
    ratingsAverage: 4.7,
    ratingsQuantity: 28,
    price: 2997,
    summary:
      'Surfing, skating, parajumping, rock climbing and more, all in one tour',
    description:
      'Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nVoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur!',
    imageCover:
      'https://images.pexels.com/photos/7267353/pexels-photo-7267353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-6-1.jpg', 'tour-6-2.jpg', 'tour-6-3.jpg'],
    startDates: ['2021-07-19,10:00', '2021-09-06,10:00', '2022-03-18,10:00'],
  },
  {
    id: 6,
    name: 'The Wine Taster',
    duration: 5,
    maxGroupSize: 8,
    difficulty: 'easy',
    ratingsAverage: 4.5,
    ratingsQuantity: 35,
    price: 1997,
    summary:
      'Exquisite wines, scenic views, exclusive barrel tastings,  and much more',
    description:
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nIrure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover:
      'https://images.pexels.com/photos/8775413/pexels-photo-8775413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-7-1.jpg', 'tour-7-2.jpg', 'tour-7-3.jpg'],
    startDates: ['2021-02-12,10:00', '2021-04-14,10:00', '2021-09-01,10:00'],
  },
  {
    id: 7,
    name: 'The Star Gazer',
    duration: 9,
    maxGroupSize: 8,
    difficulty: 'medium',
    ratingsAverage: 4.7,
    ratingsQuantity: 28,
    price: 2997,
    summary:
      'The most remote and stunningly beautiful places for seeing the night sky',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageCover:
      'https://images.unsplash.com/photo-1499749143870-d101b3686e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    images: ['tour-8-1.jpg', 'tour-8-2.jpg', 'tour-8-3.jpg'],
    startDates: ['2021-03-23,10:00', '2021-10-25,10:00', '2022-01-30,10:00'],
  },
  {
    id: 8,
    name: 'The Northern Lights',
    duration: 3,
    maxGroupSize: 12,
    difficulty: 'easy',
    ratingsAverage: 4.9,
    ratingsQuantity: 33,
    price: 1497,
    summary: 'Enjoy the Northern Lights in one of the best places in the world',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum!\nDolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit!',
    imageCover:
      'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: ['tour-9-1.jpg', 'tour-9-2.jpg', 'tour-9-3.jpg'],
    startDates: ['2021-12-16,10:00', '2022-01-16,10:00', '2022-12-12,10:00'],
  },
];

import { useState } from 'react';
import Tours from './components/Tours';
function App() {
  const [tours, setTours] = useState(toursData);

  return (
    <div className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 '>
        <div className='max-w-screen-md mb-8 lg:mb-16  mx-auto text-center'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 '>
            Tours and Activities
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
