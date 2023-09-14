import PropTypes from 'prop-types';
import styles from './Title.module.sass';

const Title = ({ title }) => {
  return <h1 className={styles.Title}>{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: 'todos',
};

export default Title;
