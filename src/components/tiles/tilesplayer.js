

import "./style/tilesplayer.css";

function TilesPlayer(props)  {
    return (
      <>
          <div style={{
            backgroundImage : "url("+'http://localhost:1337' + props.player.attributes.image.data[0].attributes.url+")"}
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
              {props.player.attributes.coach === false ?
                <img src={"http://localhost:1337" + props.player.attributes.role.data.attributes.url} 
                  alt="Alkya's players images" 
                  className="role-player">
                </img>
                :void(0)
              }
            </div>
          </div>
      </>
  )
}

export default TilesPlayer;