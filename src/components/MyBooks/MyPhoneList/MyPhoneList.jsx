import styles from './my-phone-list.module.css';

const MyPhoneList = ({ removeContact, contacts }) => {
  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}:{number}
      <button onClick={() => removeContact(id)} type="button">
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