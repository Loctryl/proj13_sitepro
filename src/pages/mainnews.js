
import { Component } from "react";
import { Row, Col, Pagination } from "react-bootstrap";
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
          pageSize: 4,
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
        <div>
          <Row className="row">
            {this.state.news.data && this.state.news.data?.map((news, i)=>(
              <Col key={i} sm={12} md={{ span: 4, offset: 1 }} lg={{ span: 6, offset: 0 }}>
                <Link to={"/mainnews/news?id="+i}>
                  <TilesNews news={news}/>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
        <div className="pagination-news">
          {this.pagination()}
        </div>
        <Footer/>
      </>
    )
  }
}