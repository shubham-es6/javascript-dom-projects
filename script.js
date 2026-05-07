let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  let div = document.createElement("div");

  let randomNum1 = Math.random() * 100;
  let randomNum2 = Math.random() * 100;
  let rotation = Math.random() * 360;

  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);

  div.style.height = "50px";
  div.style.width = "50px";
  div.style.position = "absolute";


  div.style.left = randomNum1 + "%";
  div.style.top = randomNum2 + "%";
  div.style.rotate = rotation+'deg'

  div.style.backgroundColor = `rgb(${color1},${color2},${color3})`;

  main.appendChild(div);

  console.log(div);
});
