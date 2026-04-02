import React from "react";
import { Card } from "react-bootstrap";
import { MdLocalGroceryStore } from "react-icons/md";

const BooksCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src="/src/assets/books/book.png" className="" />
        <Card.ImgOverlay>
          <span
            style={{
              backgroundColor: "#CC9600",
              padding: "4px",
              borderRadius: "8px",
              position: "absolute",
              top: "10px",
              right: "10px",
              cursor: "pointer",
            }}
          >
            <MdLocalGroceryStore size={26} color="white" />
          </span>
        </Card.ImgOverlay>

        <Card.Title>Book Title</Card.Title>
        <Card.Text>
          This is a brief description of the book. It provides an overview of
          the content and entices readers to explore further.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BooksCard;
