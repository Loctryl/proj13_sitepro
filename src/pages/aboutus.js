import { Col, Container, Row, Stack } from "react-bootstrap";
import Footer from "../components/menu/footer";
import NavBar from "../components/menu/navbar";
import TilesStaff from "../components/tiles/tilesstaff";
import "./style/aboutus.css";

function AboutUs(props) {

  return (
    <>
      <NavBar />
      <div>
        <h2>Qu'est ce qu'Alkya ?</h2>
        <Container>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </Container>
      </div>
      <div>
        <h2>Pourquoi Alkya ?</h2>
        <Stack className="logoWhy" direction="horizontal" gap={5}>
          <img src={"http://localhost:1337/uploads/Vector_1_e59d1e0399.png"} alt="Alkya logo whiteboard"></img>
          <img src={"http://localhost:1337/uploads/Vector_da271d5e61.png"} alt="Alkya logo working tree"></img>
        </Stack>
        <Container>
          <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </p>
        </Container>
      </div>
      <h2>staff</h2>
        <Container>
          <Row>
            {props.staff.data?.map((staff, i) => ( // maping every staff member in DB 
              <Col className='staff-home' key={i} xs={{ span: 6 }} md={{ span: 4 }} lg={{ span: 2}}>
                <TilesStaff key={i} staff={staff} /> {/* ../components/tiles/tilesstaff.js */}
              </Col>
            ))}
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default AboutUs;