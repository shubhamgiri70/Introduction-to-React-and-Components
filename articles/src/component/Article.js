import data from "../data.js";
import PropTypes from "prop-types";

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

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  title: PropTypes.string,
};

export default Article;
