import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export function Button({ handleLoadMore }) {
  return <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>;
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
