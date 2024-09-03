import React from "react";
import Card from "./Card";

const Carousel = ({ articles }) => {
  return (
    <div className="carousel-container flex overflow-x-auto">
      <div className="items flex gap-4 p-10">
        {articles.map((article, index) => (
          <div
            key={index}
            className="flex"
            style={{ minWidth: "300px", maxWidth: "300px", height: "400px" }}
          >
            <Card article={article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
