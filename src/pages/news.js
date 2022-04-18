import NavBar from "../components/menu/navbar";
import "./style/news.css";
import queryString from 'query-string'
import { useLocation } from "react-router-dom";


function News (props) {
  const location = useLocation()
  const values = queryString.parse(location.search)
  let news = props.news.data;

  return (
    <>
      <NavBar />
        <div className="img-news">
          {/*<img src={news.attributes.image && "http://localhost:1337"+news.attributes.image.data.attributes.url}></img>*/}
        </div>
        <h2>{news[values.id].attributes.title}</h2>
        <div className="content">
          <p>
          {news[values.id].attributes.content}
          </p>
        </div>
      </>
  )
}

export default News;