const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let intervalId = null;
let isActive = false;

const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const onBtnStart = () => {
    if (isActive) {
        console.log('изменение темы запущено, кнопка старт не активна');
        return;
    }
    isActive = true;

    intervalId = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
        console.log('изменяю цвет фона');
    }, 1000);

    btnStart.disabled = true;
};

btnStart.addEventListener('click', onBtnStart);

const onBtnStop = () => {
   clearInterval(intervalId, console.log('останавливаю изменения цвета фона'));
  isActive = false;
    
    btnStart.disabled = false;
};

btnStop.addEventListener('click', onBtnStop);