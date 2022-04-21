import NavBar from "../components/menu/navbar";
import "./style/news.css";
import queryString from 'query-string'
import { useLocation } from "react-router-dom";
import Footer from "../components/menu/footer";


function News (props) {
  const location = useLocation()
  const values = queryString.parse(location.search)
  let news = props.news.data;

  return (
    <>
      <NavBar />
          <img className="img-news" src={news[values.id].attributes.image && "http://localhost:1337"+news[values.id].attributes.image.data.attributes.url} alt="Alkya news"></img>
        <h2>{news[values.id].attributes.title}</h2>
        <div className="content">
          <p>
          {news[values.id].attributes.content}
          </p>
        </div>
        <Footer />
      </>
  )
}

export default News;