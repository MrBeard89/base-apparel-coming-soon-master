//Regex expression

var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

//Global elements
const input = document.querySelector('input')
const inputDiv = document.querySelector('.form-div')
const btn = document.querySelector('#arrow-icon')
const errorIcon = document.querySelector('.error-icon')
const label = document.querySelector('label')

//Handle function
const handleClick = function () {
  if (input.value.match(validRegex)) {
    label.textContent = 'Valid Email Address'
    inputDiv.style.borderColor = 'green'
    errorIcon.style.display = 'none'
    return true
  } else {
    errorIcon.style.display = 'block'
    label.textContent = 'Please provide a valid email'
    inputDiv.style.borderColor = 'hsl(0, 93%, 68%)'
    label.style.color = 'hsl(0, 93%, 68%)'
    return false
  }
}

btn.addEventListener('click', handleClick)

//Double click anyware to reset the input field//
document.querySelector('.container').addEventListener('dblclick', () => {
  input.value = ''
  errorIcon.style.display = 'none'
  label.textContent = ''
  inputDiv.style.borderColor = 'hsl(0, 80%, 86%)'
})
