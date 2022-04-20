import { Card } from "react-bootstrap";
import "./style/tilesnews.css";


export default function TilesNews(props){
  return (
    <>
      <Card className="card">
        <Card.Img className="image" variant="top" src={"http://localhost:1337"+props.link} />
        <Card.Body>
          <Card.Text className="title">
            {props.title}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}