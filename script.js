let grow = 0;
let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".inner");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";

  let num = 50 + Math.floor(Math.random() * 50);

  let int = setInterval(() => {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);
  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
  }, num * 100);
});
