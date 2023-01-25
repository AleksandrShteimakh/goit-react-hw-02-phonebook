import styles from "./my-form-phone.module.css";
import { Component } from "react";
import PropTypes from "prop-types"

class MyFormPhone extends Component{
  state = {
     name: '',
  number: ''
  }

  hendleSubmit =(e) => {
    e.preventDefault();
    const { onSubmit } = this.props
    onSubmit(this.state);
  }

    handleChange = ({ target }) => { 
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { handleChange, hendleSubmit } = this;
    const { name, number } = this.state;

    return (
      <form  onSubmit={hendleSubmit}>
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
                      type="tel"
                      name="number"
                      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="111-11-11"
                      required/>
              </div>
              <button type="submit">Add Contact</button>
            </form> 
    )
  }
  
  
    
  
}

export default MyFormPhone;

MyFormPhone.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
}