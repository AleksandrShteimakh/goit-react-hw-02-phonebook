import { Component } from 'react';
import { nanoid } from 'nanoid';

import MyFormPhone from './MyFormPhone/MyFormPhone';
import MyPhoneList from './MyPhoneList/MyPhoneList';
import MyFilterPhone from './MyFilterPhone/MyFilterPhone';

import contacts from './items';

import styles from './my-books.module.css';

class MyBooks extends Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };
  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  addContact = ({name, number}) => {
    if (this.isDublicate(name, number)) {
      return alert(`${name}. ${number} is alredy`);
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
  };

  handelFilter = ({target}) => {
    this.setState({filter: target.value}) 
  }

  // Проверяем дубли-------
  isDublicate(name) {
    const normalisedName = name.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalisedName;
    });
    return Boolean(result);
  }

  getFilter() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalaizedFilter);
    });
    return result;
  }

  render() {
    const { addContact, removeContact, handelFilter } = this;
    const names = this.getFilter();

    return (
      <div>
        <h3>Phonebook</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <MyFormPhone onSubmit={addContact} />
          </div>

          <div className={styles.block}>
            <h3>Contacts</h3>

            <MyFilterPhone handleChange={handelFilter} />
            <MyPhoneList removeContact={removeContact} contacts={names} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyBooks;
