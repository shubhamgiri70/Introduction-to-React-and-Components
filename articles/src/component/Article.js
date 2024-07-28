import data from "../data.js";

function Article(props) {
  return (
    <>
      <div className="article">
        <figure>
          <img
            className="article-img"
            src={props.urlToImage}
            alt={props.title}
          />
          <figcaption>
            <h1>{props.title}</h1>
          </figcaption>
        </figure>
        <p>{props.description}</p>
        <a className="button" href={props.url}>
          Visit Website
        </a>
      </div>
    </>
  );
}

export default Article;
