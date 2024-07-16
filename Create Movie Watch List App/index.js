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

// function createEle(type, attr = {}, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith("on")) {
//       let eventType = key.replace("on", "").toLowerCase();
//       element.addEventListener(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }
//   children.forEach((child) => {
//     if (typeof child === "object") {
//       element.append(child);
//     } else if (typeof child === "string") {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

function createUI(data, root) {
  let ui = data.map((movie, i) => {
    return React.createElement(
      "div",
      { className: "movie-list" },
      React.createElement("p", {}, movie.name),
      React.createElement(
        "button",
        {
          id: i,
          onClick: handleChange,
        },
        movie.watched ? "Watched" : "To Watch"
      )
    );
  });

  ReactDOM.render(ui, root);
}

input.addEventListener("keyup", handleInput);

createUI(allMovies, rootEle);
