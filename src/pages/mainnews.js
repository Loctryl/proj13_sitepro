import { Row, Col, Image, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import TilesNews from "../components/tiles/tilesnews";
import "./style/mainnews.css";


function MainNews (props) {
  let length = props.news.data.length / 4
  if(props.news.data.lenght%4 !== 0){
    length += 1
  }

  let items = [];
  for (let number = 1; number <= length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === 1}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <NavBar />
      <h2>Actualitées</h2>
      <div>
        <Row className="row">
          {props.news.data && props.news.data.map((news, i)=>(
            <Col sm={12} md={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 0 }}>
              <Link to={"/mainnews/news?id="+i}>
                <TilesNews news={news}/>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <div className="pagination-news">
        <Pagination>{items}</Pagination>
      </div>
      <Footer/>
    </>
  )
}

export default MainNews;