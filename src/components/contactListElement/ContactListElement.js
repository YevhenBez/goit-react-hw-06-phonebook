import PropTypes from 'prop-types';
import css from './css/contactListElement.module.css';

function ContactListElement({ id, name, number, onDeleteContact }) {
  return (
    <li className={css.liContactList}>
      <p>
        {name}: {number}
      </p>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListElement;
