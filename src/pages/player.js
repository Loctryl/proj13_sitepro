import { Col, Row } from "react-bootstrap";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import "./style/player.css";
import { Link, useLocation } from "react-router-dom";
import queryString from 'query-string'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown, faArrowRight} from "@fortawesome/free-solid-svg-icons"

function Player(props) {

  const values = queryString.parse(useLocation().search)
  let player = props.players.data
  player = player.filter(players => players.id === parseInt(values.id))
  console.log(player[0].attributes.logo_old_team.data);


  return (
    <>
      <NavBar />
      <Row className="marginer">
        <Col xs={{ span: 5, offset: 4 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 5, offset: 1 }}
          style={{
            backgroundImage: "url(" + 'http://localhost:1337' + player[0].attributes.image.data[0].attributes.url + ")"
          }
          }
          className="main-player-page">
          {player[0].attributes.coach === false ?
            <img src={"http://localhost:1337" + player[0].attributes.role.data.attributes.url}
              alt="Alkya's players images"
              className="role-main-player">
            </img>
            : void (0)
          }
        </Col>
        <Col xs={{ span: 5, offset: 4 }}
          md={{ span: 5, offset: 1 }}
          lg={{ span: 4 }}>
          <Row className="content-name-player">
            <Col lg={6}><h2 className="off-name-player">{player[0].attributes.first_name}</h2></Col>
            <Col lg={6}><h2 className="name-player">"{player[0].attributes.nickname}"</h2> </Col>
            <Col lg={6}><h2 className="off-name-player">{player[0].attributes.last_name}</h2> </Col>
          </Row>
          <p className="info-player">Né le {player[0].attributes.birth_date}</p>
          <p className="info-player">à {player[0].attributes.birth_place}, {player[0].attributes.nationality} <img src={"http://localhost:1337" + player[0].attributes.nationality_img.data.attributes.url} alt="Alkya's players images"></img></p>
          <p className="info-player">Taille  &emsp;{player[0].attributes.height}</p>
          <p className="info-player">Poids  &emsp;{player[0].attributes.weight}</p>
          <p className="info-player">Arrivée au club  &emsp;{player[0].attributes.join_date}</p>
          <p className="info-player">Jeu  &emsp;{player[0].attributes.team.data.attributes.game}</p>
        </Col>
      </Row>
        <h2 className="coloring"><FontAwesomeIcon icon={faAngleDown} className="icon-player" />Carrière joueur</h2>
      <Row className="carrer">
        <Col xs={12} md={6} className="carrer">
          <h3 className="name-carrer">"{player[0].attributes.nickname}"<img className="img-carrer-nat" src={"http://localhost:1337" + player[0].attributes.nationality_img.data.attributes.url} alt="Alkya's players images"></img></h3>
          <h4 className="parkour">Parcours</h4>
          <div className="inline-flex spacing">
            {player[0].attributes.logo_old_team.data.map((logo, i) =>
              <>
              <img className="logo-old-team" src={"http://localhost:1337" + logo.attributes.url} alt="Alkya's players images"></img> 
              {i !== (player[0].attributes.logo_old_team.data.length)-1 ?
                <FontAwesomeIcon icon={faArrowRight} className="logo-to" />
                :void(0)
              }
              </>
            )}
          </div>
        </Col>
        <Col xs={12} md={6}>
        <img className="big-img-carrer" src={"http://localhost:1337" + player[0].attributes.image.data[1].attributes.url} alt="Alkya's players images"></img> 
        </Col>
      </Row>
      <h3 className="parkour social">Ses réseaux</h3>
      <Row className="link-socials">
        <Col xs={12} md={6} lg={3}>
          <Link to={"/"}><img className="" src={"http://localhost:1337/uploads/twitch_512_1_2ff59f628d.png"} alt="Alkya's players images"></img></Link>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Link to={"/"}><img className="" src={"http://localhost:1337/uploads/logo_rond_twitter_1_f67aac8086.png"} alt="Alkya's players images"></img></Link>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Link to={"/"}><img className="" src={"http://localhost:1337/uploads/2048px_Instagram_icon_1_cc0d704aeb.png"} alt="Alkya's players images"></img></Link>
        </Col>
        { player[0].attributes.team.data.attributes.game === "League of Legends" ?
          <Col xs={12} md={6} lg={3}>
            <Link to={"/"}><img className="" src={"http://localhost:1337/uploads/thumbnail_LOL_14105970c6.png"} alt="Alkya's players images"></img></Link>
          </Col>
          :player[0].attributes.team.data.attributes.game === "Valorant" ?
          <Col xs={12} md={6} lg={3}>
            <Link to={"/"}><img className="" src={"http://localhost:1337/uploads/thumbnail_Valo_a1c0776115.jpeg"} alt="Alkya's players images"></img></Link>
          </Col>
          :void(0)
        } 
      </Row>
      <Footer />
    </>
  )
}

export default Player;