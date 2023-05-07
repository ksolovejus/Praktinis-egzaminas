// Input text and tel for header
var firstNameInput = document.querySelector('input[placeholder="First name"]');
var lastNameInput = document.querySelector('input[placeholder="Last name"]');
var phoneInput = document.querySelector('input[placeholder="Phone number"]');

// Set the value of the last filled input fields
firstNameInput.value = localStorage.getItem('firstName') || '';
lastNameInput.value = localStorage.getItem('lastName') || '';
phoneInput.value = localStorage.getItem('phoneNumber') || '';


// Input text and tel for section-5
var firstNameInput2 = document.querySelector('#FName2');
var lastNameInput2 = document.querySelector('#LName2');
var phoneInput2 = document.querySelector('#tel2');

// Set the value of the last filled input fields
firstNameInput2.value = localStorage.getItem('firstName2') || '';
lastNameInput2.value = localStorage.getItem('lastName2') || '';
phoneInput2.value = localStorage.getItem('phoneNumber2') || '';

// Add event listeners to input fields
firstNameInput2.addEventListener('input', function() {
  localStorage.setItem('firstName2', this.value);
});

lastNameInput2.addEventListener('input', function() {
  localStorage.setItem('lastName2', this.value);
});

phoneInput2.addEventListener('input', function() {
  localStorage.setItem('phoneNumber2', this.value);
});


// Add event listeners to input fields
firstNameInput.addEventListener('input', function() {
  localStorage.setItem('firstName', this.value);
});

lastNameInput.addEventListener('input', function() {
  localStorage.setItem('lastName', this.value);
});

phoneInput.addEventListener('input', function() {
  localStorage.setItem('phoneNumber', this.value);
});
// Input radio for section-5
var personalRadio = document.getElementById('PERSONAL');
var companyRadio = document.getElementById('COMPANY');

var lastSelected = localStorage.getItem('personal/company');

if (lastSelected == 'PERSONAL') {
  personalRadio.checked = true;
} else if (lastSelected == 'COMPANY') {
  companyRadio.checked = true;
}

var radioButtons = document.getElementsByName('personal/company');
for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function() {
    localStorage.setItem('personal/company', this.value);
  });
}