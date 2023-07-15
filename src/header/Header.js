import { Col, Container, Row } from "react-bootstrap";
import "./header.css";
import { AiFillGift } from "react-icons/ai";
function Header() {
  return (
    <div className="header_parent">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="logo d-flex">
              <AiFillGift />
               <span>Ravin</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Header;
