import PropTypes from 'prop-types';
import Tour from './Tour';

function Tours({ tours }) {
  return (
    <ul className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} />;
      })}
    </ul>
  );
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default Tours;
