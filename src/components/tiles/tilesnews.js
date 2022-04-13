import { Card } from "react-bootstrap";
import "./style/tilesnews.css";


function TilesNews(props){
  return (
    <>
      <Card className="card">
        <Card.Img className="image" variant="top" src={props.news.attributes.image && "http://localhost:1337"+props.news.attributes.image.data.attributes.url} />
        <Card.Body>
          <Card.Text className="title">
            {props.news.attributes.title}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default TilesNews;