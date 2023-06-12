import PropTypes from 'prop-types';
import css from './css/filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input
        className={css.inputFilterName}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
