nction validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var errorMessage = document.getElementById('errorMessage');

  if (username === '' || email === '' || password === '') {
    errorMessage.textContent = 'Please fill in all fields';
  } else {
    // Perform signup logic here (e.g., make an API call to sign up the user)
    errorMessage.textContent = '';
    alert('Signed up successfully!');
  }
}
function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (username === '' || email === '' || password === '') {
    alert('Please fill in all fields');
  } else {
    var signupData = `Username: ${username}, Email: ${email}, Password: ${password}`;
    displaySignupData(signupData);
    alert('Signed up successfully!');
  }
}

function displaySignupData(data) {
  var signupDataElement = document.getElementById('signupData');
  signupDataElement.textContent = data;
}
function displaySignupData(data) {
  var signupDataElement = document.getElementById('signupData');
  signupDataElement.textContent = data;
}
function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (username === '' || email === '' || password === '') {
    alert('Please fill in all fields');
  } else {
    var signupData = `Username: ${username}, Email: ${email}, Password: ${password}`;
    displaySignupData(signupData);
    alert('Signed up successfully!');
  }
}
if (!localStorage.getItem('analyticsChoice')) {
  var userChoice = confirm("Would you like to enable analytics? Click 'Cancel' to decline or 'OK' to accept. (This pop-up will never show again)");
  
  if (userChoice == true) {
      localStorage.setItem('analyticsChoice', 'accepted');
      // Here you can put the code to enable analytics
  } else {
      localStorage.setItem('analyticsChoice', 'declined');
      window.location.href = 'analytics.html';
  }
  
  var showAgain = confirm("Do you want to see this message again?");
  if (showAgain == false) {
      localStorage.setItem('neverShowAgain', 'true');
  }
}

if (localStorage.getItem('neverShowAgain') == 'true') {
  // Here you can put the code to never show the alert again
}
