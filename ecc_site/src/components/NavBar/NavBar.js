import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'; // Make sure to import your custom CSS file

const NavBar = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">Untold Story</Navbar.Brand>
          <Nav className="navbar-nav">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/DataCollection">Help Us</Nav.Link>            
            <Nav.Link href="/UserStories">User Stories</Nav.Link>
            <Nav.Link href="/Chat">Chatbot</Nav.Link>
            <Nav.Link href="/Quiz">Do you Know Aussies?</Nav.Link>
            <Nav.Link href="/Stats">Stats</Nav.Link>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
