import React from "react";
import "./Card.css";

const Card = ({ article }) => {
  const { author, title, description, url, urlToImage } = article;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="card-container bg-white rounded-lg shadow-md overflow-hidden">
      {urlToImage && (
        <img src={urlToImage} alt={title} className="card-image" />
      )}
      <div className="card-content">
        <h1 className="card-title" style={{ color: "black" }}>
          {truncateText(title, 50)}
        </h1>
        <p className="card-description">{truncateText(description, 100)}</p>
        <p className="card-author">
          By {truncateText(author || "Unknown", 30)}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
