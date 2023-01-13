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
import './assets/carousel-arrow.png';

// Работа с регистрацией

const loginButton = document.querySelector('.login-button');
const loginPopUp = document.querySelector('.login-pop-up');
const signInButton = document.querySelector('.sign-in-button');
const loginEmailInput = document.querySelector('#login-email');
const loginPasswordInput = document.querySelector('#login-password');
const userData: string[] = [];
const substrates = document.querySelectorAll('.substrate');
const registerLink = document.querySelector('.register-link');
const createAccountPopUp = document.querySelector('.create-account-pop-up');
const signUpButton = document.querySelector('.sign-up-button');
const logInLink = document.querySelector('.log-in-link');

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
        createAccountPopUp.classList.remove('visible');
        substrates.forEach(e => {
            e.classList.remove('visible');
        })
    })
})

registerLink.addEventListener('click', () => {
    loginPopUp.classList.remove('visible');
    createAccountPopUp.classList.add('visible');
})

signUpButton.addEventListener('click', () => {
    createAccountPopUp.classList.remove('visible');
    substrates.forEach(e => {
        e.classList.remove('visible');
    })
})

logInLink.addEventListener('click', () => {
    createAccountPopUp.classList.remove('visible');
    loginPopUp.classList.add('visible');
})

// Карусель

const carouselImagesBlock = document.querySelector('.carousel-images');
const carouselSwitches: NodeListOf<HTMLInputElement> = document.querySelectorAll('.carousel-switch');
const carouselImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.carousel-image');
const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
const carouselArrowRight= document.querySelector('.carousel-arrow-right');

carouselSwitches.forEach(swtch => {
    swtch.addEventListener('click', () => {
        carouselImagesBlock.className = `carousel-images ${swtch.dataset.number}-image`;
    })
})

carouselImages.forEach(image => {
    image.addEventListener('click', () => {
        carouselImagesBlock.className = `carousel-images ${image.dataset.number}-image`;
        if (image.dataset.number === 'first') {
            carouselSwitches[0].checked = true;
        } else if (image.dataset.number === 'second') {
            carouselSwitches[1].checked = true;
        } else {
            carouselSwitches[2].checked = true;
        }
    })
})

carouselArrowLeft.addEventListener('click', () => {
    if (carouselImagesBlock.className === 'carousel-images second-image') {
        carouselImagesBlock.className = 'carousel-images first-image';
        carouselSwitches[0].checked = true;
    } else if (carouselImagesBlock.className === 'carousel-images third-image') {
        carouselImagesBlock.className = 'carousel-images second-image';
        carouselSwitches[1].checked = true;
    }
})

carouselArrowRight.addEventListener('click', () => {
    if (carouselImagesBlock.className === 'carousel-images' || carouselImagesBlock.className === 'carousel-images first-image') {
        carouselImagesBlock.className = 'carousel-images second-image';
        carouselSwitches[1].checked = true;
    } else if (carouselImagesBlock.className === 'carousel-images second-image') {
        carouselImagesBlock.className = 'carousel-images third-image';
        carouselSwitches[2].checked = true;
    }
})