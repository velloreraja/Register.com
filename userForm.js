let form = document.querySelector('#form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
// let submitBtn = document.querySelector(".submit");
// let error = document.querySelector(".error");

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let cpasswordValue = cpassword.value.trim();

  if (userNameValue === '') {
    setError(userName, 'Username cannot be Blank');
  } else {
    setSuccess(userName);
  }

  if (emailValue === '') {
    setError(email, 'Email can not be Blank');
  } else if (!isEmail(emailValue)) {
    setError(email, 'Not a valid Email');
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password can not be blink');
  } else {
    setSuccess(password);
  }

  if (cpasswordValue === '') {
    setError(cpassword, 'Password can not be blink');
  } else if (passwordValue !== cpasswordValue) {
    setError(cpassword, 'cpassword does not match');
  } else {
    setSuccess(cpassword);
  }
}
function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
