import {BrowserRouter , Route, Routes } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
// import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>SCHOOL COOL</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Account} />
        <Route path="/free" component={FreeComponent} />
        <Route path="/auth" component={AuthComponent} />
      </Routes> 
    </BrowserRouter>  
    </Container>
  );
}

export default App;
