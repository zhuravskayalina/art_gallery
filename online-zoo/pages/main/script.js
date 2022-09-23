const emailInput = document.querySelector('.input-email');
const submitButton = document.querySelector('.input-submit');

const greenColor = '#4B9200';
const redColor = '#D31414';

emailInput.addEventListener('input', onInput);

function isValid(value) {
    const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return regExp.test(value);
};

function onInput(event) {
    console.log(event.target.value)
    if (isValid(event.target.value)) {
        submitButton.classList.remove('mistake-submit');
        emailInput.classList.remove('mistake-email');
    } else {
        submitButton.classList.add('mistake-submit');
        emailInput.classList.add('mistake-email');
    }
};

