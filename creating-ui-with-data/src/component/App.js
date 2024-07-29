import data from "../data.json";
import Card from "./Card";

function App() {
  return (
    <div className="main">
      {data.animals.map((animal) => (
        <Card key={animal.id} {...animal} />
      ))}
    </div>
  );
}

export default App;
