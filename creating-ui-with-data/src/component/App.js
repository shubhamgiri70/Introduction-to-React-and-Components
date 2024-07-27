import data from "../data.json";

function App() {
  return (
    <div className="main">
      {data.animals.map((animal) => (
        <Card key={animal.id} {...animal} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <div className="wrapper">
      <img src={props.imgUrl} alt={props.name} />
      <h2>{props.breed}</h2>
      <h3>{props.location}</h3>
      <p>
        Weight: {props.weight} <span>Age: {props.age}</span>
      </p>
      {props.animalType === "dog" ? (
        <button className="dog">🐶 Say Hello 🐶</button>
      ) : (
        <button className="cat">😺 Say Hello 😺</button>
      )}
    </div>
  );
}

export default App;
