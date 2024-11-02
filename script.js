const form = document.querySelector('.form__container')
const first_name = document.getElementById('first-name')
const last_name = document.getElementById('last-name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const checkbox = document.getElementById('checkbox')
const radio_box = document.querySelectorAll('.radio__container div')
const selectedRadio = document.querySelectorAll('.radio__container input[type="radio"]')
const radio_error = document.querySelector('.radio__container + span.error-msg')

const confirmation = document.querySelector('.confirmation')

const email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

form.addEventListener('submit', e => {
  e.preventDefault();

  if (validate()) {
    confirmation.classList.add('display')
    form.reset();
    radio_box.forEach(radio => radio.classList.remove('active'));
  }
});

form.addEventListener('click', () => {
  confirmation.classList.remove('display')
})

function validateError(input, message) {
  if (message) {
    input.classList.add('error')
    input.nextElementSibling.classList.add('visible')
    input.nextElementSibling.textContent = message
    if (input.classList.contains('checkbox__container')) {
      input.classList.remove('error')
      input.nextElementSibling.classList.add('visible')
      input.nextElementSibling.textContent = message
    }
  } else {
    input.classList.remove('error')
    input.nextElementSibling.classList.remove('visible')
  }
}

function validate() {
  let isValid = true;

  if (first_name.value.trim() === '') {
    validateError(first_name, 'This field is required');
    isValid = false;
  } else {
    validateError(first_name);
  }

  if (last_name.value.trim() === '') {
    validateError(last_name, 'This field is required');
    isValid = false;
  } else {
    validateError(last_name);
  }

  if (email.value.trim() === '') {
    validateError(email, 'This field is required');
    isValid = false;
  } else if (!email.value.match(email_regex)) {
    validateError(email, 'Please enter a valid email address');
    isValid = false;
  } else {
    validateError(email);
  }

  if (message.value.trim() === '') {
    validateError(message, 'This field is required');
    isValid = false;
  } else {
    validateError(message);
  }

  if (!checkbox.checked) {
    validateError(checkbox.parentElement, 'To submit this form, please consent to being contacted');
    isValid = false;
  } else {
    validateError(checkbox.parentElement);
  }

  if (!Array.from(selectedRadio).some(button => button.checked)) {
    radio_error.classList.add('visible');
    radio_error.textContent = 'Please select a query type';
    isValid = false;
  } else {
    radio_error.classList.remove('visible');
  }

  return isValid;
}

// form.addEventListener('change', e => {
//   validateError(e.target)
// })

first_name.addEventListener('change', e => {
  if (e.target.value.trim() === '') {
    validateError(first_name, 'This field is required')
  } else {
    validateError(first_name)
  }
})
last_name.addEventListener('change', e => {
  if (e.target.value.trim() === '') {
    validateError(last_name, 'This field is required')
  } else {
    validateError(last_name)
  }
})

email.addEventListener('change', e => {
  if (e.target.value.trim() === '') {
    validateError(email, 'This field is required')
  } else if (!email.value.match(email_regex)) {
    validateError(email, 'Please enter a valid email address')
  } else {
    validateError(email)
  }
})
message.addEventListener('change', e => {
  if (e.target.value.trim() === '') {
    validateError(message, 'This field is required')
  } else {
    validateError(message)
  }
})

// checkbox.addEventListener('change', e => {
//   if (!e.target.checked) {
//     validateError(checkbox.parentElement, 'To submit this form, please consent to being contacted')
//   } else {
//     validateError(checkbox.parentElement)
//   }
// })

radio_box.forEach(radio => radio.addEventListener('click', e => {
  radio_box.forEach(radio => {
    radio.classList.remove('active');
  })
  const type = radio.querySelector('input[type="radio"]')
  type.checked = true
  radio.classList.add('active')
  radio_error.classList.remove('visible')
}))

checkbox.parentElement.addEventListener('click', e => {
  checkbox.checked = !checkbox.checked
  checkbox.addEventListener('click', e => {
    e.stopPropagation()
    validateError(checkbox.parentElement)
  })
  validateError(checkbox.parentElement)
})