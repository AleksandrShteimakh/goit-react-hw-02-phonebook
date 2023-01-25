import PropTypes from "prop-types"
import styles from "./my-filter-phone.module.css"

const MyFilterPhone = ({handleChange}) => {
  return (
    <>
     <div className={styles.formGrup}>
                <label>Find contacts by name</label>
              <input
                onChange={handleChange}
                placeholder="filter"
                      type=""
                      name="filter"
                      pattern=""
                      title=""
                      required/>
      </div>
    </>
     
    )

}

export default MyFilterPhone;

MyFilterPhone.propTypes = {
  handleChange: PropTypes.func.isRequired,
}