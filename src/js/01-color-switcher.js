const refs = {
  btn: document.querySelectorAll('button'),
  body: document.querySelector('body'),
};
let colorTimerId = null;

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startChangeColor() {
  refs.btn[0].setAttribute('disabled', true);
  colorTimerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  refs.btn[0].removeAttribute('disabled');
  clearInterval(colorTimerId);
}

refs.btn[0].addEventListener('click', startChangeColor);
refs.btn[1].addEventListener('click', stopChangeColor);
