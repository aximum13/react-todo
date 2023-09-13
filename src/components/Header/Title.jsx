import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'todos',
};

export default Title;
