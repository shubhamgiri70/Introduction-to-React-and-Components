function App() {
  return (
    <div className="main">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="wrapper">
      <img src="https://placedog.net/400/300?random=2" alt="01" />
      <h2>Golden Retriever</h2>
      <h3>Los Angeles 🌴</h3>
      <p>
        weight: 15 <span>age: 3</span>
      </p>
      <button>🐶 Say Hello 🐶</button>
    </div>
  );
}

export default App;
