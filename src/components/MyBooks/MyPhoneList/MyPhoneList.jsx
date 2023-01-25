import PropTypes from "prop-types"
import styles from './my-phone-list.module.css';

const MyPhoneList = ({ removeContact, contacts }) => {
  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <button className={styles.button} onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ol>{names}</ol>;
};

export default MyPhoneList;

MyPhoneList.defaultProps = {
  contacts: [] 
}

MyPhoneList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }))
  
}
