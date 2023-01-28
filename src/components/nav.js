import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
function NavTop() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" as={Link}>
          Space Mongolia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-white" to="/" as={Link}>
              Эхлэл
            </Nav.Link>
            <Nav.Link className="text-white" href="#action2">
              Мэдээ мэдээлэл{" "}
            </Nav.Link>
            <Nav.Link className="text-white" href="#action3">
              Сансар судлал
            </Nav.Link>
            <Nav.Link className="text-white" href="#action4">
              Судалгаа{" "}
            </Nav.Link>
            <Nav.Link className="text-white" href="#action5">
              Бидний тухай{" "}
            </Nav.Link>
            <Nav.Link className="text-white" href="#action6">
              Холбоо барих{" "}
            </Nav.Link>
            <NavDropdown
              className="text-white"
              title="Бусад"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Хайх"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Хайх</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTop;
