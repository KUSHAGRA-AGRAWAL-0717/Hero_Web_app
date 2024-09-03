import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CharactersComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://newsapi.org/v2/everything?q=cartoons&from=2024-09-02&to=2024-09-02&sortBy=popularity&apiKey=6d54174e47f1457180f7381e8a950628
`;

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log("Fetched data:", data);
        if (data.articles) {
          setCharacters(data.articles.slice(0, 10));
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetching comics: ", error);
        setIsLoading(false);
      }
    }
    fetchCharacters();
  }, [URL]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (characters.length === 0) {
    return <div>No data available</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
  };

  const placeholderImage =
    "https://via.placeholder.com/300x200?text=No+Image+Available";

  return (
    <div style={{ padding: "50px", overflow: "hidden" }}>
      <Slider {...settings}>
        {characters.map((character, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              marginRight: "15px",
              width: "250px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={character.urlToImage || placeholderImage}
              alt={character.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                padding: "10px",
                background: "#fff",
                borderRadius: "10px",
                marginTop: "10px",
                height: "180px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#333",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {character.title}
              </h3>
              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "14px",
                  color: "#333",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {character.description}
              </p>
              <p
                style={{ margin: "0 0 10px", fontSize: "14px", color: "#666" }}
              >
                By: {character.author || "Unknown Author"}
              </p>
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#007bff",
                  textDecoration: "none",
                }}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CharactersComponent;
