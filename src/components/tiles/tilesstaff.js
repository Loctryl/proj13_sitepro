import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/tilesstaff.css";

export default function TilesStaff(props) {

  return (
    <>
      <h2>staff</h2>
      <Container className="marginStaff">
        <Row>
          {props.staff.data?.map((staff, i) => (
            <Col key={i} xs={3} md={3} lg={3}>
              <Card className="imageStaff">
                <Card.Img
                  src={"http://localhost:1337" + staff.attributes.image.data.attributes.url}
                  alt={staff.attributes.name + ": Alkya staff"}
                  className="cardImg"
                />
              </Card>
              <p>{staff.attributes.first_name} {staff.attributes.last_name} - {staff.attributes.post}</p> 
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}