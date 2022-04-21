
import { Link } from "react-router-dom";
import "./style/tilesplayer.css";

function TilesPlayer(props)  {
    return (
      <>
        <Link to={"/mainteam/team/player"}>
          <div style={{
            backgroundImage : "url("+'http://localhost:1337' + props.player.attributes.image.data.attributes.url+")"}
            }
            className="imgCard-players">
            <img src={"http://localhost:1337" + props.player.attributes.nationality_img.data.attributes.url} 
              alt="Alkya's players images" 
              className="nation-img">
            </img>
            <div className="content-text-player">
              <p className="text-player">{props.player.attributes.first_name}</p>
              <p className="text-player nickname">"{props.player.attributes.nickname}"</p>
              <p className="text-player">{props.player.attributes.last_name}</p>
            </div>
          </div>
        </Link>
      </>
  )
}

export default TilesPlayer;