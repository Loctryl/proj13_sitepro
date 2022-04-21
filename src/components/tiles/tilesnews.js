import { Card } from "react-bootstrap";
import "./style/tilesnews.css";


export default function TilesNews(props){
  return (
    <>
      <Card className="card-news">
        <Card.Img className="image-tilesnews" variant="top" src={"http://localhost:1337"+props.link} />
      </Card>
      <h3 className="title">{props.title}</h3>
    </>
  )
}