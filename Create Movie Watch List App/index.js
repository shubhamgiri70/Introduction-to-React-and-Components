let input = document.querySelector(".input-text");
let rootEle = document.querySelector(".root");

let allMovies = [
  {
    name: "Inception",
    watched: false,
  },
  {
    name: "Forest Gump",
    watched: true,
  },
];

function handleInput(event) {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI(allMovies, rootEle);
  }
}

function handleChange(event) {
  let id = event.target.id;

  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, rootEle);
}

function createUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    let div = document.createElement("div");
    div.classList.add("movie-list");

    let p = document.createElement("p");
    p.innerText = movie.name;

    let button = document.createElement("button");
    button.id = i;
    button.innerText = movie.watched ? "Watched" : "To Watch";
    button.addEventListener("click", handleChange);

    div.append(p, button);
    rootEle.appendChild(div);
  });
}

input.addEventListener("keyup", handleInput);

createUI(allMovies, rootEle);
