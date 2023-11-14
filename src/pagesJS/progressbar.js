// js progress bar

let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

let progressStartValue = 0;
let progressEndValue = 90;
let speed = 70;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
  //   console.log(progressStartValue);
}, speed);
