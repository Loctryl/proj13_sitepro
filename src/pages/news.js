import NavBar from "../components/menu/navbar";
import "./style/news.css";


function News(props){
  return (
    <>
      <NavBar />
      <div>
        {/*<img src={props.news.attributes.image && "http://localhost:1337"+props.news.attributes.image.data.attributes.url}></img>*/}
      </div>
      <h2>Comment bien utiliser sa pompe à pénis ?</h2>
      <div className="content">
        <p>

        </p>
      </div>
    </>
  )
}

export default News;