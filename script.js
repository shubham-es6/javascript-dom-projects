let btn = document.querySelector("button");
let main = document.querySelector("main");

let quotes = [
  "Small steps every day.",
  "Dream big, start small.",
  "Be better than yesterday.",
  "Stay humble, work hard.",
  "Good things take time.",
  "Never stop learning.",
  "Believe in yourself.",
  "Progress, not perfection.",
  "Your time will come.",
  "Make yourself proud.",
];

btn.addEventListener("click", function () {
  let h1 = document.createElement("h1");

  let randomNum1 = Math.random() * 80;
  let randomNum2 = Math.random() * 80;
  let randomNum3 = Math.floor(Math.random() * quotes.length);
  let scale = Math.random() * 2 + 0.5;

  let randomColour1 = Math.floor(Math.random() * 256);
  let randomColour2 = Math.floor(Math.random() * 256);
  let randomColour3 = Math.floor(Math.random() * 256);

  let rotation = Math.random() * 360;

  h1.innerText = quotes[randomNum3];

  h1.style.position = "absolute";

  h1.style.left = randomNum1 + "%";
  h1.style.top = randomNum2 + "%";
  h1.style.rotate = rotation + "deg";
  h1.style.scale = scale;
  h1.style.color = `rgb(${randomColour1},${randomColour2}, ${randomColour3})`;

  main.appendChild(h1);
});
