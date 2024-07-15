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

function createEle(type, attr = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith("on")) {
      let eventType = key.replace("on", "").toLowerCase();
      element.addEventListener(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    } else if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    let div = createEle(
      "div",
      { className: "movie-list" },
      createEle("p", {}, movie.name),
      createEle(
        "button",
        {
          id: i,
          onClick: handleChange,
        },
        movie.watched ? "Watched" : "To Watch"
      )
    );

    root.appendChild(div);
  });
}

input.addEventListener("keyup", handleInput);

createUI(allMovies, rootEle);
