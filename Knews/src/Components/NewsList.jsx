import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearch } from "./Context/SearchContext";
import { useCategory } from "./Context/CategoryContext";
import { useNews } from "./Context/NewsContext";
import defaultImage from "../assets/default.png";
import { Link } from "react-router-dom";

const NewsList = () => {
  // State and custom hooks
  const { search } = useSearch(); // Get search keyword from SearchContext
  const { category } = useCategory(); // Get category from CategoryContext
  const { news, setNews } = useNews(); // Get news state and setter function from NewsContext
  const [loading, setLoading] = useState(true); // Loading state for fetching news
  const [currentPage, setCurrentPage] = useState(1); // Current page number for pagination

  // Fetch news data based on search and category filters
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Start loading
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
          setNews(data.articles); // Set fetched articles in NewsContext
        } else {
          setNews([]); // Set empty array if no articles found
        }
      } catch (error) {
        console.error("Error fetching news data: ", error);
        setNews([]); // Handle error by setting empty array
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchNews();
  }, [search, category, setNews]); // Dependency array to re-fetch news on search or category change

  const pageSize = 6; // Number of articles per page

  // Slice news array based on current page and page size
  const currentCards = Array.isArray(news)
    ? news.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : [];

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ marginTop: "12px" }}>
      <Container>
        {/* Show loading message if fetching news */}
        {loading ? (
          <p>Loading...</p>
        ) : currentCards.length > 0 ? ( // Show news articles if available
          <>
            {/* Grid layout for displaying news cards */}
            <Row xs={1} md={2} lg={3} className="g-4">
              {currentCards.map((article, index) => (
                <Col key={index} className="mb-4">
                  <div className="card h-100">
                    {/* Display article image or default image */}
                    <img
                      src={article.image || defaultImage}
                      className="card-img-top"
                      alt={article.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      {/* Display article title */}
                      <h5 className="card-title">{article.title}</h5>
                      {/* Link to NewsDetail page with newsId as index */}
                      <Link
                        to={`/news/${index}`}
                        className="btn btn-primary mt-auto"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            {/* Pagination controls */}
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from(
                  { length: Math.ceil(news.length / pageSize) },
                  (_, index) => (
                    <li
                      key={index}
                      className={`page-item ${
                        index + 1 === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => paginate(index + 1)}
                        className="page-link"
                      >
                        {index + 1}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </>
        ) : (
          // Show message if no news articles found
          <p>No news articles found.</p>
        )}
      </Container>
    </div>
  );
};

export default NewsList;
