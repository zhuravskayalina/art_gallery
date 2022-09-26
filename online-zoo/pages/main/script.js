// email input section

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


// scrollbar

const scroll = document.querySelector('.scroll');
const scrollContainer = document.querySelector('.scroll-bar');

let dragging = false; //if scroll dragging rn
let startX = 0; //start coords
let startY = 0;

scroll.addEventListener('mousedown', function (event) {
    dragging = true;
    scroll.style.backgroundColor = '#4B9200';
    startX = event.pageX - Number.parseInt(scroll.style.left || 0);
    startY = event.pageY - Number.parseInt(scroll.style.top || 0);

});

document.body.addEventListener('mousemove', (event) => {
    if (!dragging) return;
    let newPositionX = event.pageX - startX;
    scroll.style.left = `${newPositionX}px`;

    if (newPositionX <= 2) {
        scroll.style.left = 2 + 'px'
    } else if (newPositionX >= 482) {
        scroll.style.left = 482 + 'px'
    };
})

document.body.addEventListener('mouseup', () => {
    dragging = false;
    scroll.style.backgroundColor = '#F9804B';
});

