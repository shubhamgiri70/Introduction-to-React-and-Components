function App(prop) {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

function Hero() {
  return <img src="/images/bird.jpg" alt="01" className="hero-img" />;
}

function Articles() {
  return (
    <>
      <Article title="this is heading of the article" />
      <Article title="this is heading of the article" />
      <Article title="this is heading of the article" />
      <Article title="this is heading of the article" />
    </>
  );
}

function Article(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="02"
        width="400px"
      />
    </div>
  );
}

function Footer() {
  return (
    <ul>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Twitter</li>
      <li>Redit</li>
    </ul>
  );
}

export default App;
