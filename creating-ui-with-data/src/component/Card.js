import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="wrapper">
      <img src={props.imgUrl} alt={props.name} />
      <h2>{props.breed.toUpperCase()}</h2>
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

Card.prototype = {
  breed: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Card;
