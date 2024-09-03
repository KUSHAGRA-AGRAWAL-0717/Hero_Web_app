import React, { useEffect, useState } from "react";

const ComicsComponent = () => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://newsapi.org/v2/everything?q=comics&from=2024-09-02&to=2024-09-02&sortBy=popularity&apiKey=6d54174e47f1457180f7381e8a950628`;

  useEffect(() => {
    async function fetchComics() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log("Fetched data:", data);
        if (data.articles) {
          setComics(data.articles.slice(0, 10));
        }
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetching comics: ", error);
        setIsLoading(false);
      }
    }
    fetchComics();
  }, [URL]);

  useEffect(() => {
    console.log("Updated comics:", comics);
  }, [comics]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (comics.length === 0) {
    return <div>No data available</div>;
  }

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div style={{ width: "80vw", display: "flex", flexDirection: "row" }}>
      <style>
        {`
          .items {
            display: flex;
            flex-direction: row;
            padding: 20px;
            gap: 16px; 
          }
          .card {
            width: 250px; /* Fixed width */
            height: 400px; /* Fixed height */
            border-radius: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: white;
          }
          .img {
            width: 100%;
            height: 200px; 
            border-radius: 50%; 
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .img img {
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures the image covers the entire area */
          }
          .content {
            padding: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
          }
          h2 {
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: bold;
          }
          p {
            font-size: 14px;
            margin-bottom: 15px;
            color: #333;
          }
          .card-author {
            font-weight: bold;
            margin-bottom: 10px;
            color: #555;
          }
          .card-link {
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
            align-self: flex-start;
          }
          .card-link:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <div className="items" style={{ display: "flex", flexDirection: "row" }}>
        {comics.map((comic, index) => (
          <div key={index}>
            <div className="card p-8">
              <div className="img">
                <img src={comic.urlToImage} alt="" />
              </div>
              <div className="content">
                <p>{truncateDescription(comic.description, 100)}</p>
                <p className="card-author">By {comic.author || "Unknown"}</p>
                <a
                  href={comic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicsComponent;
