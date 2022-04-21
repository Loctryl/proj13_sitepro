
import { Component } from "react";
import { Row, Col, Pagination, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import TilesNews from "../components/tiles/tilesnews";
import "./style/mainnews.css";

export default class MainNews extends Component {
  constructor(props) {
    const qs = require('qs');
    let pagin = 1
    super(props);
    this.state = {
      news: [],
      query : qs.stringify({
        pagination: {
          page: pagin,
          pageSize: 6,
        },
      }, {
        encodeValuesOnly: true,
      })
    }
  }

  componentDidMount = async () => {
    const reponse1 = await fetch('http://localhost:1337/api/news?populate=*&'+this.state.query+'', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const fetchNews = await reponse1.json()

    this.setState({
      news: fetchNews,
    })
    
  }

  pagination() {
    for (let number = 1; number <= 5; number++) {
      return(
        <div className="page-number">{number}</div>
      )
    }
  }

  render(){
    return (
      <>
        <NavBar />
        <h2>Actualitées</h2>
        <Container>
          <Row>
            {this.state.news.data?.map((news, i)=>(
              <Col sm={12} md={{ span: 4, offset: 0 }} lg={{ span: 6, offset: 0 }}>
                <Link to={"/mainnews/news?id="+i}>
                  <TilesNews link={news.attributes.image.data.attributes.url} title={news.attributes.title}/>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="pagination-news">
          { /*i.map((news))*/}
        </div>
        <Footer/>
      </>
    )
  }
}