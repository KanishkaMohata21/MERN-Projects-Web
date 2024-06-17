import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearch } from "./Context/SearchContext";
import { useCategory } from "./Context/CategoryContext";
import defaultImage from '../assets/default.png';

const NewsList = () => {
  const { search } = useSearch();
  const { category } = useCategory();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?lang=en&token=API_KEY`;
      if (search) {
        url += `&q=${search}`;
      }
      if (category) {
        url += `&topic=${category}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles && Array.isArray(data.articles)) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
      } catch (error) {
        console.error("Error fetching news data: ", error);
        setNews([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchNews();
  }, [search, category]); 

  const pageSize = 8; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  const currentCards = news.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{marginTop:'12px'}}>
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          currentCards.length > 0 ? (
            <>
              <Row xs={1} md={2} lg={3} className="g-4">
                {currentCards.map((article, index) => (
                  <Col key={index} className="mb-4">
                    <div className="card h-100">
                      <img
                        src={article.image || defaultImage}
                        className="card-img-top"
                        alt={article.title}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.description}</p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary mt-auto"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <nav>
                <ul className="pagination justify-content-center">
                  {Array.from({ length: Math.ceil(news.length / pageSize) }, (_, index) => (
                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                      <button onClick={() => paginate(index + 1)} className="page-link">
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          ) : (
            <p>No news articles found.</p>
          )
        )}
      </Container>
    </div>
  );
};

export default NewsList;
