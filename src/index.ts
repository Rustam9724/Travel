import '../src/style.scss';
import '../src/pop-up.scss';
import './assets/bike.png';
import './assets/calendar.png';
import './assets/fly.png';
import './assets/carousel-image_1.png';
import './assets/carousel-image_2.png';
import './assets/carousel-image_3.png';
import './assets/facebook-logo.png';
import './assets/google-logo.png';

// Работа с регистрацией

const loginButton = document.querySelector('.login-button');
const loginPopUp = document.querySelector('.login-pop-up');
const signInButton = document.querySelector('.sign-in-button');
const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#login-password');
const userData: string[] = [];
const body = document.querySelector('body');
const substrates = document.querySelectorAll('.substrate');

loginButton.addEventListener('click', () => {
    loginPopUp.classList.add('visible');
    substrates.forEach(elem => {
        elem.classList.add('visible');
    })

})

loginEmailInput.addEventListener('change', (event) => {
    userData[0] = (event.target as HTMLInputElement).value
})

loginPasswordInput.addEventListener('change', (event) => {
    userData[1] = (event.target as HTMLInputElement).value
})

signInButton.addEventListener('click', () => {
    alert(`User e-mail is ${userData[0]}\nUser password is ${userData[1]}`);
})

substrates.forEach(elem => {
    elem.addEventListener('click', () => {
        loginPopUp.classList.remove('visible');
        substrates.forEach(e => {
            e.classList.remove('visible');
        })
    })
})