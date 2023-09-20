import React, { useState, useEffect } from 'react';
import './news.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

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

  return (
    <div className='news-feed-container'>
      <h1>Latest <span>News</span></h1>
      {/* <div className='news-contents'> */}
      <Slider className="slider" autoplay={1500}>
        {newsData !== '' ? (newsData.map((news, index) => (
            <div className='news-card'
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
          ))) : null
          }
      </Slider>
        </div>
      // </div>
  );
};

export default News;
