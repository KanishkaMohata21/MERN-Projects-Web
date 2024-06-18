import React from "react";
import Navbar from "./Navbar";
import { Col, Container } from "react-bootstrap";
import Footer from "./Footer";
import NewsList from "./NewsList";

export default function NewsPage() {
  return (
    <div>
      <Container>
          <Navbar />
          <NewsList />
          <Footer />
      </Container>
    </div>
  );
}
