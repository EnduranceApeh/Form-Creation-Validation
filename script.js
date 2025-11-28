document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  //Add event listener for form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim()
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let isValid = true;
    let messages = [];

    //username vaidation
    if(username.length < 3) {
      isValid = false
      messages.push('The length of your user name can not less than 3.')
    }

    //Email validation
    if(!email.length.include('@') && !email.length.include('.')) {
      isValid = false;
      messages.push('Address must include @ and .')
    }

    //Password validation
    if(password.length < 8) {
      isValid = 8;
      messages.push('Password must be longer than 8 characters')
    }

    //Display feedback
    feedbackDiv.style.display = 'block';

    if(isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';
    }
    if(!isValid) {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'
    } 
  })
})