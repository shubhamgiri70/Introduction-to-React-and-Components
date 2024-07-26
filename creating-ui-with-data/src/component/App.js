import data from "../data.json";

function App() {
  return (
    <div className="main">
      {data.animals.map((animal) => (
        <Card key={animal.id} info={animal} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="wrapper">
      <img src={props.info.imgUrl} alt={props.info.name} />
      <h2>{props.info.breed}</h2>
      <h3>{props.info.location}</h3>
      <p>
        Weight: {props.info.weight} <span>Age: {props.info.age}</span>
      </p>
      <button>🐶 Say Hello 🐶</button>
    </div>
  );
}

export default App;
