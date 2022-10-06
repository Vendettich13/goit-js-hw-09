const refs = {
  btn: document.querySelectorAll('button'),
  body: document.querySelector('body'),
};
let colorTimerId = null;
let isActive = false;

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const startChangeColor = function () {
  if (isActive === true) {
    return;
  } else isActive = true;
  colorTimerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopChangeColor = function () {
  isActive = false;
  clearInterval(colorTimerId);
};

refs.btn[0].addEventListener('click', startChangeColor);
refs.btn[1].addEventListener('click', stopChangeColor);
