// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./App.module.css";

function OffcanvasExample() {
  return (
    <>
      <div className={styles.headerBaru}>
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={styles.blue + " " + styles.tinggi}
          >
            <Container fluid>
              <Navbar.Brand href="#" className={styles.logo}>
                Logo
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    BCR
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    className={`justify-content-end flex-grow-1 fw-bolder ${styles.marginKanan}`}
                  >
                    <Nav className={styles.marginText}>Our Service</Nav>
                    <Nav className={styles.marginText}>Why Us</Nav>
                    <Nav className={styles.marginText}>Testimonial</Nav>
                    <Nav className={styles.marginText}>Faq</Nav>
                  </Nav>
                  {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default OffcanvasExample;
