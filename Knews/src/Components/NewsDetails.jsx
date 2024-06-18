import React from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../assets/default.png';
import { useNews } from './Context/NewsContext'; 

const NewsDetail = () => {
  const { news } = useNews(); // Use useNews hook to access news state
  const { newsId } = useParams();

  const article = news[newsId];

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="container mt-3">
      <div className="card">
        <img
          src={article.image || defaultImage}
          className="card-img-top"
          alt={article.title}
          style={{ height: 'auto', maxWidth: '100%' }}
        />
        <div className="card-body">
          <h1 className="card-title">{article.title}</h1>
          <p className="card-text">{article.content}</p>
          <p className="card-text"><strong>Description:</strong> {article.description}</p>
          <p className="card-text"><strong>Source:</strong> <a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read original article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
