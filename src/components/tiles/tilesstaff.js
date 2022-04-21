import { Card, Col, Container, Row } from "react-bootstrap";
import "./style/tilesstaff.css";

export default function TilesStaff(props) {

  return (
    <>
      <Card className="imageStaff">
        <Card.Img
          src={"http://localhost:1337" + props.staff.attributes.image.data.attributes.url}
          alt={props.staff.attributes.name + ": Alkya staff"}
          className="cardImg"
        />
      </Card>
      <p>{props.staff.attributes.first_name} {props.staff.attributes.last_name} - {props.staff.attributes.post}</p> 
    </> 
  )
}