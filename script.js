
let arr = [
  {
    shortName: "CSK",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "MS Dhoni",
    primary: "yellow",
    secondary: "blue",
  },

  {
    shortName: "RCB",
    fullName: "Royal Challengers Bengaluru",
    trophies: 0,
    captain: "Faf du Plessis",
    primary: "red",
    secondary: "black",
  },

  {
    shortName: "MI",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
    primary: "blue",
    secondary: "gold",
  },

  {
    shortName: "KKR",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Shreyas Iyer",
    primary: "purple",
    secondary: "gold",
  },

  {
    shortName: "RR",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Sanju Samson",
    primary: "pink",
    secondary: "blue",
  },

  {
    shortName: "PBKS",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shikhar Dhawan",
    primary: "red",
    secondary: "silver",
  },

  {
    shortName: "GT",
    fullName: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
    primary: "darkblue",
    secondary: "gold",
  },

  {
    shortName: "LSG",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    captain: "KL Rahul",
    primary: "skyblue",
    secondary: "orange",
  },
];
let main = document.querySelector("main");

let h1 = document.querySelector("h1");

let fullName = document.querySelector("#fullname");

let captain = document.querySelector("#captain");

let trophies = document.querySelector("#trophies");

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let winner = arr[Math.floor(Math.random() * arr.length)];

  h1.innerHTML = winner.shortName;

  fullName.textContent = winner.fullName;

  captain.textContent = "Captain " + winner.captain;

  trophies.textContent = "Trophies: " + winner.trophies;

  h1.style.backgroundColor = winner.secondary;
  main.style.backgroundColor = winner.primary;
});
