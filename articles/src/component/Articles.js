import React from "react";
import Article from "./Article";
import data from "../data.js";

function Articles() {
  return (
    <>
      <section className="articles">
        {data.map((item) => (
          <Article key={item.publishedAt} {...item} />
        ))}
      </section>
    </>
  );
}

export default Articles;
