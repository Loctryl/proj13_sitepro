import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/tilesstaff.css";

export default function TilesStaff(props) {
  return (
    <>
      <h2>staff</h2>
      <Container className="marginStaff">
        <Row>
          <Col xs={3} md={3} lg={3}>
            <Card className="imageStaff">
              <Card.Img src="../../../database/public/uploads/boris_d8a16c64dc.jpg" alt="Staff's pictures"/>
            </Card>
            <p>role</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}