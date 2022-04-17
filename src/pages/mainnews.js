import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../components/menu/navbar";
import TilesNews from "../components/tiles/tilesnews";
import "./style/mainnews.css";


function MainNews (props) {
  return (
    <>
      <NavBar />
      <h2>Actualitées</h2>
      <div>
        <Row className="row">
          {props.news.data && props.news.data.map((news, i)=>(
            <Col sm={12} md={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 0 }}>
              <Link to={"/mainnews/news"}><TilesNews news={news}/></Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default MainNews;