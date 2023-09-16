import React, { useState, useEffect } from 'react';
import './news.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNewsData(data.articles))
      .catch((error) => console.error('Error fetching news data:', error));
    }, []);
    // console.log(newsData);

    const openUrlInNewTab = (url) => {
      window.open(url, '_blank');
    };

    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    const nextNews = () => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevNews = () => {
      setCurrentNewsIndex((prevIndex) =>
        prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
      );
    };

    const autoScroll = () => {
      nextNews();
    };
    useEffect(() => {
      const intervalId = setInterval(autoScroll, 5000); // Adjust the interval time (in milliseconds) as needed
      return () => {
        clearInterval(intervalId); // Clear the interval when the component unmounts
      };
    }, []);

  return (
    <div className='news-feed-container'>
      <h1>Latest <span>News</span></h1>
      <div className='news-contents'>
          {newsData.map((news, index) => (
            <div className={`news-card ${
                index === currentNewsIndex ? 'active' : ''
              }`}
              key={index} onClick={() => openUrlInNewTab(news.url)}>
              <div className='news-image'>
                <img src={news.urlToImage} alt="News Image" />
              </div>
              <div className='news-text'>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <button className='read-more'><a href={news.url} target="_blank" rel="noopener noreferrer">Read More</a></button>
                <p className='pub-date'>Published Date: {new Date(news.publishedAt).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevNews} className="carousel-button left-button">
          &#9664;
        </button>
        <button onClick={nextNews} className="carousel-button right-button">
          &#9654;
        </button>
      </div>
  );
};

export default News;
