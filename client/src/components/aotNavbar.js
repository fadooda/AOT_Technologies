import * as ReactBoostrap from "react-bootstrap";

function aotNavbar() {
  return (
    <div >
        <header className="main-navigation">
        <ReactBoostrap.Navbar bg="dark" variant="dark">
          <ReactBoostrap.Navbar.Brand href="#home">AOT Technologies</ReactBoostrap.Navbar.Brand>
            <ReactBoostrap.Nav className="ml-auto">
              <ReactBoostrap.Nav.Link href="#profile">Profile</ReactBoostrap.Nav.Link>
              <ReactBoostrap.Nav.Link href="#logout">Log Out</ReactBoostrap.Nav.Link>
            </ReactBoostrap.Nav>
        </ReactBoostrap.Navbar>
        </header>
    </div>
    
  );
}

export default aotNavbar;
