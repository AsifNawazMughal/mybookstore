import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import booksapi, { Book } from "../../api/booksapi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BlinkBlur } from "react-loading-indicators";

const Shop = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const booksPerPage = 12;

  // Generate random prices for books
  const getPrice = (idx: number) => {
    const prices = [700, 950, 990, 1200, 850, 1100, 750, 920];
    return prices[idx % prices.length];
  };
  const filters = ["All", "Novel", "Translations", "Kid's Stories"];

  // Assign categories to books based on index
  const getCategoryForBook = (idx: number): string => {
    const categories = filters;
    return categories[idx % categories.length];
  };

  // Filter books based on selected category
  const filteredBooks =
    selectedFilter === "All"
      ? booksapi
      : booksapi.filter(
          (book, idx) => getCategoryForBook(idx) === selectedFilter
        );

  // Pagination calculations
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Simulate loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen
  if (loading) {
    return (
      <div
        style={{
          backgroundColor: "var(--theme-black)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <BlinkBlur
          color={["#ecb985ff", "#df9c5aff", "#ce8b48ff", "#cd8032"]}
          size="small"
        />
        <h2 style={{ color: "var(--theme-gold)", fontWeight: "500" }}>
          Loading Books...
        </h2>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "var(--theme-black)",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <Container className="py-5">
        <h1
          className="display-4 fw-bold text-center my-4"
          style={{ color: "var(--theme-gold)" }}
        >
          Shop Books from Here
        </h1>

        {/* Filter Buttons */}
        <div className="d-flex justify-content-center gap-4 mb-5 flex-wrap">
          {filters.map((filter) => (
            <div key={filter} className="d-flex align-items-center gap-2">
              <input
                type="checkbox"
                checked={selectedFilter === filter}
                onChange={() => handleFilterChange(filter)}
                style={{
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                  accentColor: "var(--theme-gold)",
                }}
              />
              <label
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  color: "var(--theme-white)",
                }}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </label>
            </div>
          ))}
        </div>

        {/* Books Grid */}
        <Row xs={1} md={2} lg={4} className="g-3">
          {currentBooks.map((book: Book, idx: number) => {
            const originalIdx = booksapi.indexOf(book);
            return (
              <Col key={idx}>
                <Card
                  style={{
                    backgroundColor: "var(--theme-black)",
                    border: "1px solid #cd8032",
                    borderRadius: "10px",
                    height: "auto",
                    transition: "transform 0.3s, box-shadow 0.3s",
                  }}
                  className="h-auto"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(204, 150, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={book.imageLink}
                      style={{
                        height: "350px",
                        width: "100%",
                        objectFit: "contain",
                        borderRadius: "10px",
                        padding: "15px",
                      }}
                    />
                  </div>
                  <Card.Body
                    className="d-flex flex-column"
                    style={{ padding: "15px" }}
                  >
                    <Card.Title
                      style={{
                        color: "var(--theme-gold)",
                        fontSize: "1.15rem",
                        fontWeight: "700",
                        minHeight: "50px",
                        marginBottom: "1px",
                      }}
                    >
                      {book.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        color: "var(--theme-white)",
                        fontSize: "0.9rem",
                        marginBottom: "5px",
                      }}
                    >
                      <strong>Author:</strong> {book.author}
                    </Card.Text>
                    <div
                      style={{
                        display: "flex",
                        gap: "15px",
                        marginBottom: "10px",
                        fontSize: "0.85rem",
                        color: "#aaa",
                      }}
                    >
                      <span>Year: {book.year}</span>
                      <span>Pages: {book.pages} pages</span>
                    </div>
                    <div style={{ marginTop: "auto" }}>
                      <div
                        style={{
                          color: "#666",
                          fontSize: "0.8rem",
                          marginBottom: "10px",
                        }}
                      >
                        Available across all branches
                      </div>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid var(--theme-gold)",
                          color: "var(--theme-gold)",
                          borderRadius: "25px",
                          padding: "8px 30px",
                          fontWeight: "600",
                          width: "100%",
                          transition: "all 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--theme-gold)";
                          e.currentTarget.style.color = "var(--theme-black)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.color = "var(--theme-gold)";
                        }}
                        href={book.link}
                        target="_blank"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
            {/* Previous Arrow */}
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                backgroundColor:
                  currentPage === 1 ? "#666" : "var(--theme-gold)",
                border: "none",
                color: "var(--theme-black)",
                padding: "8px 15px",
                fontWeight: "bold",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
              }}
            >
              <IoIosArrowBack size={20} />
            </Button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  style={{
                    backgroundColor:
                      currentPage === pageNum
                        ? "var(--theme-gold)"
                        : "transparent",
                    border: "2px solid var(--theme-gold)",
                    color:
                      currentPage === pageNum
                        ? "var(--theme-black)"
                        : "var(--theme-gold)",
                    padding: "8px 15px",
                    fontWeight: "600",
                    minWidth: "45px",
                  }}
                >
                  {pageNum}
                </Button>
              )
            )}

            {/* Next Arrow */}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                backgroundColor:
                  currentPage === totalPages ? "#666" : "var(--theme-gold)",
                border: "none",
                color: "var(--theme-black)",
                padding: "8px 15px",
                fontWeight: "bold",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              }}
            >
              <IoIosArrowForward size={20} />
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Shop;
