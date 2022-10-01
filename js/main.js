// Seletors
const sectionLogin = document.querySelector('.field-login-screen');
const sectionRegister = document.querySelector('.field-register-screen');

// Control Password Showing
const eyePass = document.querySelector('.fa-eye');
const eyeSlashPass = document.querySelector('.fa-eye-slash');
const passShow = document.querySelector('#field-input-password');


// Functions
const registerScreen = document.querySelector('.btn-register').addEventListener('click', function () {
    sectionLogin.style.display = 'none';
    sectionRegister.style.display = 'flex';
});

const loginScreen = document.querySelector('#login-screen').addEventListener('click', function () {
    sectionLogin.style.display = 'flex';
    sectionRegister.style.display = 'none';
});

// Passord showing functions
eyeSlashPass.addEventListener('click', function () {
    eyePass.style.display = 'block';
    eyeSlashPass.style.display = 'none';
    passShow.type = 'text';

});

eyePass.addEventListener('click', function () {
    eyePass.style.display = 'none';
    eyeSlashPass.style.display = 'block';
    passShow.type = 'password';

});

