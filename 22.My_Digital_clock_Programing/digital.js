const timer1 = document.getElementById("clock");
const timer2 = document.createElement("h1");
timer2.classList = "time";
timer1.appendChild(timer2);

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let mınuts = date.getMinutes();
  let seconds = date.getSeconds();

  //   let period = "  (PM)";
  //     if (hours == 0) {
  //       hours = 00;
  //     } else if (hours > 12) {
  //       hours = hours - 12;
  //       period = "PM";
  //     }
  hours = hours < 10 ? "0" + hours : hours;
  mınuts = mınuts < 10 ? "0" + mınuts : mınuts;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  time = `<span>${hours}</span>:${mınuts}:<span>${seconds}</span>`;
  timer2.innerHTML = time;
}, 1000);

window.onload = function () {
  document.getElementById("audio").play();
};
