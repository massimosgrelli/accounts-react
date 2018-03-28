import { validateOnChange } from '../../utils/validateField'

// Generic handleInputChange for the state components

const handleInputChange = function (e, _id) {
  // *this* is bound to calling components

  // Check if e is already a string value or an event object
  const value = typeof e === 'string' ? e : e.target.value

  if (fieldChangedAtLeastOnce(this.state, _id, value)) return

  // if e is a string it means that it's a default value and doesn't need to pass validation
  if (typeof e !== 'string') {
    const errors = validateOnChange(e, _id, this.defaults.fields, this.getModel(), [...this.state.errors])

    if (errors) {
      this.setState({ errors })
    }
  }
  this.setState({ [_id]: value })
}

function fieldChangedAtLeastOnce (state, _id, value) {
  return !state.hasOwnProperty(_id) && value === ''
}

export default handleInputChange