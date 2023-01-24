import { Component } from "react";
import styles from "./my-books.module.css"
import { nanoid } from 'nanoid'

class MyBooks extends Component {
state = {
  contacts: [
    {
      id: nanoid(),
      name: 'Rosie Simpson',
      number: '459-12-56'
    },
    {
      id: nanoid(),
      name: 'Hermione Kline',
      number: '443-89-12'
    },
    {
      id: nanoid(),
      name: 'Eden Clements',
      number: '645-17-79'
    },
    {
      id: nanoid(),
      name: 'Annie Copeland',
      number: '227-91-26'
    },
  ],
  filter: '',
  name: '',
  number: ''
}
  removeContact(id) {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return {
        contacts: newContacts
      }
  })
}

  addContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
     if (this.isDublicate(name, number)) {
        return alert(`${name}. ${number} is alredy`)
      }
    this.setState(prevState => {
      const { name, number, contacts } = prevState;
     
      const newContact = {
        id: nanoid(), 
        name,
        number,
      }
      return { contacts: [newContact, ...contacts], name: "", number: ""}
    })
  }
  
  handleChange = ({ target }) => { 
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }
  
  // Проверяем дубли-------
  isDublicate(name, number) {
    const normalisedName = name.toLowerCase();
    const normalisedNumber = number.toLowerCase();
    const { contacts } = this.state;
    const result = contacts.find(({ name, number }) => {
      return (name.toLowerCase() === normalisedName && number.toLowerCase() === normalisedNumber)
    })
    return Boolean(result)
  }
  
  getFilter() {
    const { filter, contacts } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return(name.toLowerCase().includes(normalaizedFilter))
    })
    return result;
    
  }

  render() {
    const { addContact, handleChange } = this;
    const { name, number } = this.state;
    const contacts = this.getFilter()
    const names = contacts.map(({ id, name, number }) => <li key={id}>{name}:{number}
      <button onClick={()=>this.removeContact(id)} type="button">Delete</button></li>)
    
    return (
      <div>
        <h3>Phonebook</h3>
        <div className={styles.wrapper}>
          <div className={styles.block}>
          
            <form action="" onSubmit={addContact}>
              <div className={styles.formGrup}>
                <label>Name</label>
                <input
                  value={name}
                  onChange={handleChange}
                  placeholder="name"
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required/>
              </div>
              <div className={styles.formGrup}>
                <label>Number</label>
                <input
                  value={number}
                  onChange={handleChange}
                  placeholder="number"
                      type="number"
                      name="number"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required/>
              </div>
              <button type="submit">Add Contact</button>
            </form> 
          </div>
          
          <div className={styles.block}>
            <h3>Contacts</h3>
            <div className={styles.formGrup}>
                <label>Find contacts by name</label>
              <input
                onChange={handleChange}
                placeholder="filter"
                      type="text, number"
                      name="filter"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                      required/>
            </div>
        
            <ol>
              {names}
            </ol>
          </div>
        </div>
      </div>
      )
    }
}

export default MyBooks;