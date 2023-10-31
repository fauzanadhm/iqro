const progressBar = document.querySelectorAll(".progres");
window.addEventListener("load", function () {
  progressBar.forEach((item) => {
    let block = item.querySelector(".block");
    let numElement = item.querySelector(".num");
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector(".circle");
    circle.setAttribute("r", block.offsetWidth / 2.4); // set progress bar radius relative to its container width
    setInterval(() => {
      if (count == num) {
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time);
    circle.style.strokeDashoffset = 600 - 400 * (num / 100);
  });
});
