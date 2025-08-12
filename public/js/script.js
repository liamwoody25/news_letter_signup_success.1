const submitBtn = document.querySelector('.subscribe-btn');
const removeBtn = document.querySelector('.dismiss-btn')
const emailInput = document.getElementById('email-input');
const invalidMessage = document.querySelector('.error-message')
const showSuccess = document.querySelector('.success-modal');
const newsSignUp = document.querySelector('.news-card');


// this function is an invalid email whether typed in or not 
function invalidEmail() {
  if (emailInput.value === '') {
    emailInput.style.border = '1px solid #e74c3c'
    invalidMessage.style.display = 'block'
    emailInput.style.color = '#e74c3c'
    showSuccess.style.display = 'none'
  } else {
    invalidMessage.style.display = 'none'
    emailInput.style.border = '1px solid #949494'
  }
}

//  this function is when the email is valid the modal pops up
function validEmail() {
  if (emailInput.value === 'email@company.com') {
    newsSignUp.style.display = 'none'
    showSuccess.style.display = 'block'
  } else {
    showSuccess.style.display = 'none'
  }
}

submitBtn.addEventListener('click', function(){
  invalidEmail()
  validEmail()
})

removeBtn.addEventListener('click', function(){
  showSuccess.style.display = 'none';
  newsSignUp.style.display = 'flex';
  emailInput.value = ''
})