import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://newsapi.org/v2/everything?q=marvel&from=2024-09-02&to=2024-09-02&sortBy=popularity&apiKey=6d54174e47f1457180f7381e8a950628`;

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setArticles(data.articles.slice(0, 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (articles.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="p-4">
      <Carousel articles={articles} />
    </div>
  );
};

export default NewsComponent;
