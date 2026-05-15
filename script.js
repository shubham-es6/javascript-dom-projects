const users = [
  {
    name: "John Doe",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Frontend developer who loves creating modern UI designs.",
  },
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Passionate photographer and travel enthusiast.",
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "UI/UX designer focused on clean and minimal experiences.",
  },
  {
    name: "Rohan Mehta",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "JavaScript developer and open-source contributor.",
  },
  {
    name: "Ananya Singh",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Content creator sharing tech and lifestyle tips.",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = user.bio;

    content.appendChild(heading);
    content.appendChild(paragraph);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);
const inp = document.querySelector(".inp");
const cardsContainer = document.querySelector(".cards");

inp.addEventListener("input", () => {
  const searchValue = inp.value.trim().toLowerCase();

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue),
  );

  cardsContainer.innerHTML = "";

  showUsers(filteredUsers);
});
