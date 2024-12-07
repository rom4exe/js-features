const p = document.getElementById("timer");
const countTimer = function () {
  if (Number(p.textContent) > 0) {
    p.textContent = Number(p.textContent) - 1;
  } else if (Number(p.textContent) === 0) {
    alert("Вы победили в конкурсе!");
  }
};

setInterval(countTimer, 1000);

// const p = document.getElementById("timer");
// let timeId = setInterval(() => {
//   p.textContent = Number(p.textContent) - 1;
// }, 1000);

// setTimeout(() => {
//   clearInterval(timeId);
//   alert("Вы победили в конкурсе!");
// }, p.textContent * 1000);
